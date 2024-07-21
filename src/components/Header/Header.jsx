import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
const Header = () => {

  return (
    <Navbar className="border-b-2">
      <a
        to="/"
        className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Transaction 
        </span>
        {" "}
        Manager
      </a>
  
      <div className=" flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
        >
           <FaSun />
        </Button>

      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className=" cursor-pointer" as={"div"}>
          <a to="/">Home</a>
        </Navbar.Link>
        <Navbar.Link className=" cursor-pointer"  as={"div"}>
          <a to="/">Transactions</a>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
