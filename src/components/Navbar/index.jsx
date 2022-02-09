import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">Notre Agence</Link>
        </nav>
    )
}

export default Navbar;