import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { MdDashboard, MdHome, MdAccountCircle } from "react-icons/md";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><MdDashboard /></div>
      <ul className="navbar-links">
        <li><Link to="/"><MdHome /></Link></li>
        <li><ThemeButton /></li>
        <li><Link to="/settings"><MdAccountCircle /></Link></li>
      </ul>
    </nav>
  );
}