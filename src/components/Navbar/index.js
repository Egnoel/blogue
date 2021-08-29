import React, { useState } from 'react';
import './style.css';
import searchImg from '../../assets/icons/search.png';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const[search, setSearch] = useState(false);

    const submitSearch =(e)=>{
        e.preventDefault();
        alert("Searched");
    }

    const openSearch=() =>{
        setSearch(true);
        
    }

    const searchClass =search ?'searchInput active':'searchInput';


  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About US</NavLink></li>
            <li><NavLink to="/post">Problemas</NavLink></li>
            <li><NavLink to="#">Resolvidos</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img className="searchIcon" onClick={openSearch} src={searchImg} alt="Search" />
            </form>
        </div>
    </div>
   )

 }

export default Navbar;