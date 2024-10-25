import { Search } from "lucide-react"; // Importing the Search icon from Lucide
import "./Navbar.scss"; // SCSS for styling Navbar

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <a className="btn btn-ghost text-xl" href="/Home">
          Fun Movie
        </a>
        <ul className="menu menu-horizontal">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">Genres</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
        </ul>
        <div
          className="search-icon"
          onClick={() => (window.location.href = "/Search")}
        >
          <Search size={24} /> {/* You can adjust the size as needed */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
