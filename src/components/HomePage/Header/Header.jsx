import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/theme/themeSlice";
import { setSearchTitle } from "../../../redux/filter/filterSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const disptach = useDispatch();
  const filters = useSelector((state) => state.filters);
  const { theme } = useSelector((state) => state.theme);
  const handleSearchTitleChange = (e) =>
    disptach(setSearchTitle(e.target.value));
  return (
    <Navbar className="border-b-2 fixed z-[200] top-0 w-full">
      <a
        to="/"
        className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Transaction
        </span>{" "}
        Manager
      </a>

      <div className=" flex items-center justify-center gap-4 md:order-2">
        <TextInput
          type="text"
          name="title"
          placeholder="Enter transaction title"
          className="w-full"
          icon={AiOutlineSearch}
          value={filters.searchTitle}
          onChange={handleSearchTitleChange}
        />
        <Button
          className=" hidden sm:inline"
          color="gray"
          pill
          onClick={() => disptach(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun size={20} />}
        </Button>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className=" cursor-pointer" as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link className=" cursor-pointer" as={"div"}>
          <Link to="/">Transactions</Link>
        </Navbar.Link>
        <Navbar.Link className=" cursor-pointer" as={"div"}>
        <Link to="/visualizations">
           Visualizations
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
