
import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./assets/main.css"

function Navbar() {

  return (
      <div className="logo nav-common">
      
          <nav id="nav ">
              <ul className="nav-common">
                  <li>
              <NavLink to="/">
                  Home
                      </NavLink>
                  </li>
                
                  <li>
                    
              <NavLink to="/rentals">
                  Rentals
                      </NavLink>
                  </li>
                  <li>
              <NavLink to="/bookings">
                  Bookings
                      </NavLink>
                  </li>
            
                  </ul>
          </nav>
          </div>
  )
}

export default Navbar

 