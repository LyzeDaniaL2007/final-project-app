import { Link, useSearchParams } from "react-router-dom";
import "./navbar.scss"; // Import SCSS
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/action/themeAction.js";

const Navbar = () => {
  const [getTheme, setTheme] = useContext(ThemeContext);
  const dispatchRedux = useDispatch();
  const theme = useSelector((state) => state.theme);

  const root = document.documentElement;

  // Handle perubahan tema (Light/Dark)
  const handleThemeToggle = () => {
    dispatchRedux(toggleTheme()); // Memanggil Redux action untuk mengganti tema
    const newTheme = theme === "Light" ? "dark" : "Light"; 
    setTheme(newTheme); // Simpan state tema ke ThemeContext
    root.classList.toggle("dark"); // Toggle class di root element
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {});
  };

  return (
    <nav className="navbar">
      <div className="navbar bg-base-300 dark:bg-gray-800">
        <div className="flex-1">
          <Link to="/" className="navbar-brand text-gray-800 dark:text-white">
            Restaurant
          </Link>
        </div>

        <div className="flex-none space-x-4">
          <ul className="menu menu-horizontal px-1">
            <li><Link className="text-gray-800 dark:text-white" to="/">Beranda</Link></li>
            <li><Link className="text-gray-800 dark:text-white" to="/Product">Product</Link></li>
            <li><Link className="text-gray-800 dark:text-white" to="/Country">Country</Link></li>
          </ul>

          {/* Search bar */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Search"
              value={searchParams.get("search") || ""}
              onChange={handleSearchChange}
              className="input"
            />
            <span className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          {/* Theme Toggle dengan Sun/Moon Icon */}
          <label className="swap swap-rotate cursor-pointer">
            <input
              type="checkbox"
              onChange={handleThemeToggle}
              checked={theme === "Light"}
            />

            {/* Sun Icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Moon Icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
