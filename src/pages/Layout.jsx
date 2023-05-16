import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/style.css';

const Layout = () => {
    return (
      <div className='header'>
        <nav>
          <ul className='nav'>
            <li>
              <Link to="/"><i className="fa-solid fa-house"></i> Home</Link>
            </li>
            <li>
              <Link to="/films"><i className="fa-solid fa-film"></i> Films</Link>
            </li>
            <li>
              <Link to="/register"><i className="fa-sharp fa-regular fa-id-card"></i> Register</Link>
            </li>
            <li>
              <Link to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    )
  };

export default Layout;