import { Search } from "lucide-react"; // Importing the Search icon from Lucide
import "./Navbar.scss"; // SCSS for styling Navbar
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/action/themeAction";

const Navbar = () => {
  const [getTheme, setTheme] = useContext(ThemeContext);
  const root = window.document.documentElement;
  const theme = useSelector((state) => state.theme);
  const dispatchRedux = useDispatch();
  console.log(theme);

  const handleTheme = () => {
    if (getTheme === "light") {
      setTheme("dark");
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      setTheme("light");
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar  dark:bg-black">
        <a className="btn btn-ghost text-xl" href="/Home">
          Fun Movie
        </a>
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/Genre">Genres</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/rated">Rated</Link>
          </li>
        </ul>
        <div
          className="search-icon"
          onClick={() => (window.location.href = "/Search")}
        >
          <Search size={24} /> {/* You can adjust the size as needed */}
        </div>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={handleTheme}
            checked={getTheme === "dark"} // Ensure dark mode is correctly toggled
          />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
