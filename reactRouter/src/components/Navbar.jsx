import React from "react";
import { Routes, Route, Link} from "react-router-dom";

export default function Navbar() {
    return (
    <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/violet">Violet</Link>
      
        </div>
    );
}