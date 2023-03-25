import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UsuarioContext from "./UsuarioContext";

export default function Login(){
    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();
    const {logado, setLogado, Usuarios} = useContext(UsuarioContext);

    function verificaLogin(){
        Usuarios.map((user) => 
        <>
        {
        user.usuario === usuario && user.senha === senha ?
        setLogado({nick: user.nick}) : alert("Login inválido")
        }
        </>
        )
    }
    return(
        <>
        <input type="text" placeholder="Digite o Usuario" onChange={(e) => setUsuario(e.target.value)}/>
        <input type="password" placeholder="Digite a Senha" onChange={(e) => setSenha(e.target.value)}/>
        {logado? <Link to="/">Confirmar</Link> : <button onClick={verificaLogin}>Entrar</button>}
        <h1>{logado? logado.nick : "Não logado"}</h1>
        </>
    );
}