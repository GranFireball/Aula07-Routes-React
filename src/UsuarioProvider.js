import UsuarioContext from "./UsuarioContext";
import {Usuarios} from "./data";
import { useState } from "react";

export default function UsuarioProvider({children}){
    const [logado, setLogado] = useState();
    return(
        <UsuarioContext.Provider value={{Usuarios, logado, setLogado}}>
            {children}
        </UsuarioContext.Provider>
    );
}