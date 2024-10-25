import React from 'react';
import './navbar.scss'; // Assuming you're using SCSS

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src="https://vitejs.dev" alt="Logo" className="logo" />
          Fun Movie
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul>
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
