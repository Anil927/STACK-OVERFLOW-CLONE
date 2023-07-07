import React from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import search from "../../assets/search.svg"
import Avatar from "../Avatar/Avatar"
import Button from "../Button/Button"
import "./Navbar.css";

const Navbar = () => {

    let User = null;

  return(
    <nav className="top-nav">
        <div className="navbar">
            <Link to="/" className="nav-item nav-logo" >
                <img src={logo} width="180" alt='logo'></img>
            </Link>
            <Link to="/" className="nav-item nav-btn">About</Link>
            <Link to="/" className="nav-item nav-btn">Product</Link>
            <Link to="/" className="nav-item nav-btn">For Teams</Link>
            <form>
                <input type="text" placeholder="Search" />
                <img src={search} alt="search" width="19" className="nav-item search-icon"/>
            </form>
            {
                User === null ? 
                <Link to="/Auth" className="nav-item nav-links">Login</Link> 
                : 
                <>
                    <Avatar backgroundColor='#009dff' px="10px" py="7px" color="white" borderRadius='50%' ><Link to="/User" style={{textDecoration:"none",color:"white"}}>M</Link></Avatar>
                    <button className="nav-item nav-links">Logout</button>
                </>
            }
        </div>
    </nav>
  );
};

export default Navbar;
