import "./App.css";
import Header from "./components/Header/Header";
import AllTransactions from "./components/AllTransactions/AllTransactions";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <div className=" flex flex-col max-w-screen gap-8">
        <Header />
        <AllTransactions />
      </div>
    </>
  );
}

export default App;
