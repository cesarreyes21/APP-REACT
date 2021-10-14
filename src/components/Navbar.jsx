import React from "react";

export const Navbar = () => {

    return (
        <header className="header">
            <nav className="navbar">
            <img
          src="../../../logo.png"
          alt="logo"
          className="logo"
        />
        <ul>
                <li className="item-nav">INICIO</li>
                <li className="item-nav">PROGRAMA</li>
                <li className="item-nav">GALERÍA</li>
                <li className="item-nav">DOCENTES</li>
                <li className="item-nav">BLOG</li>
                <li className="item-nav">CONTACTO</li>
             </ul>
               
               
            </nav>
        </header>
    );

};