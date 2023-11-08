import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";




const Navbar = () => {

  const isLoggedIn = !!sessionStorage.getItem('username');
   console.log(isLoggedIn);
   const userData = sessionStorage.getItem('username'); 
  const handleLogout = () => {
    // Clear the 'username' from sessionStorage
    sessionStorage.removeItem('username');
  };
  
  const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Foodies
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resturant">
                Resturant
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/foodcatagory">
                Food Catagory
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              </ul>

              {isLoggedIn ? (
                <div className="button">
                 <span> {userData}</span>
                <NavLink to="/login" className="btn btn-outline-dark ms-2" onClick={handleLogout}>
                <i className="fa fa-sign-in me-1"></i>Logout</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length}) 
                  </NavLink>
                  <NavLink to="/order" className="btn btn-outline-dark ms-2">
                <i class="bi bi-gift-fill"></i>Order</NavLink>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"></link>
                 </div>
               
              ) : (
                <div className="button">
                <NavLink to="/sing-up" className="btn btn-outline-dark">
                <i className="fa fa-user-plus me-1"></i>Register</NavLink>
                <NavLink to="/login" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i>Login</NavLink>
               
                
             </div>
                
              )} 
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
