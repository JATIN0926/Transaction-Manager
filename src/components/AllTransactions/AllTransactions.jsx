// import React from "react";
// import TransactionCard from "../TransactionCard/TransactionCard";
// import Modal from "../../utils/modal/modal"
// import { Button } from "flowbite-react";
// import AddTransaction from "../AddTransaction/AddTransaction";
// import { useSelector } from "react-redux";


// const AllTransactions = () => {
// const {transactions} = useSelector((state)=> state.transactions)
//   return (
//     <div className=" w-screen max-w-full px-8 flex flex-col items-start justify-center gap-10">
//       <div className="w-full flex items-center justify-between">
//         <h1 className=" text-4xl font-semibold text-[#1B1C20] text-center">
//           All <span className=" text-[#712FFF]">Transactions</span> Overview
//         </h1>
//         <AddTransaction />
//       </div>
//       <div className="w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {transactions.map((transaction, index) => (
//             <TransactionCard key={index} {...transaction} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllTransactions;


import React, { useState } from "react";
import TransactionCard from "../TransactionCard/TransactionCard";
import { Button, Modal } from "flowbite-react";
import AddTransaction from "../AddTransaction/AddTransaction";
import EditTransaction from "../EditTransaction/EditTransaction"; // Import EditTransaction
import { useSelector } from "react-redux";

const AllTransactions = () => {
  const { transactions } = useSelector((state) => state.transactions);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <div className="w-screen max-w-full px-8 flex flex-col items-start justify-center gap-10">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-[#1B1C20] text-center">
          All <span className="text-[#712FFF]">Transactions</span> Overview
        </h1>
        <AddTransaction />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              {...transaction}
              onEdit={() => handleEditClick(transaction)} // Pass handler
            />
          ))}
        </div>
      </div>

      {/* Edit Transaction Modal */}
      {isEditModalOpen && selectedTransaction && (
        <Modal show={isEditModalOpen} onClose={handleCloseEditModal}>
          <Modal.Header>
            Edit Transaction
          </Modal.Header>
          <Modal.Body>
            <EditTransaction
              transaction={selectedTransaction}
              onClose={handleCloseEditModal}
            />
          </Modal.Body>
          <Modal.Footer>
          <h1 className=" text-2xl mx-auto font-semibold">
            Click <span className="text-[#712FFF]">Edit</span> to Update your{" "}
            <span className="text-[#712FFF]">Transaction!</span>{" "}
          </h1>
        </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AllTransactions;
