import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { MdDashboard, MdHome, MdSettings } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><MdDashboard /></div>
      <ul className="navbar-links">
        <li><Link to="/"><MdHome /></Link></li>
        <li><Link to="/settings"><MdSettings /></Link></li>
      </ul>
    </nav>
  );
}