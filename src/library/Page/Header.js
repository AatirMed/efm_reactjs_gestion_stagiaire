import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <nav>
        <Link to='/'>Liste de stagaiaire</Link>
        <Link to='/add'>Ajouter Stagiaire</Link>
        </nav>
        
    )
}

export default Header;