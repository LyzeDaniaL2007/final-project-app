import { Search } from "lucide-react"; // Importing the Search icon from Lucide
import "./Navbar.scss"; // SCSS for styling Navbar
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <a className="btn btn-ghost text-xl" href="/Home">
          Fun Movie
        </a>
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/home">Movies</Link>
          </li>
          <li>
            <Link to="#">TV</Link>
          </li>
          <li>
            <Link to="#">Genres</Link>
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
      </div>
    </div>
  );
};

export default Navbar;
