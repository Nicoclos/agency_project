import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">Notre Agence</Link>
        </nav>
    )
}