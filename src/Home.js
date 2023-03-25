import { useContext } from "react";
import NavBar from "./NavBar";
import UsuarioContext from "./UsuarioContext";

export default function Home(){
    const {logado} = useContext(UsuarioContext);
    return(
        <div>
            <NavBar/>
            <h1>{logado}</h1>
        </div>
    );
}