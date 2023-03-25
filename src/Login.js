import { useContext, useState } from "react";
import UsuarioContext from "./UsuarioContext";

export default function Login(){
    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();
    const {logado, setLogado, Usuarios} = useContext(UsuarioContext);

    function verificaLogin(){
        Usuarios.map((user) => 
        <>
        {
        user.usuario === usuario && user.senha === senha &&
        setLogado(user.nick)
        }
        </>
        )
    }
    return(
        <>
        <input type="text" placeholder="Digite o Usuario" onChange={(e) => setUsuario(e.target.value)}/>
        <input type="password" placeholder="Digite a Senha" onChange={(e) => setSenha(e.target.value)}/>
        <button onClick={verificaLogin}>Entrar</button>
        <h1>{logado}</h1>
        </>
    );
}