import { useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import UsuarioContext from "./UsuarioContext";

export default function Home(){
    return(
        <div>
            <NavBar/>
            <Link to="/about">About</Link>
        </div>
    );
}