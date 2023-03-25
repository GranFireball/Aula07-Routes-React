import './NavBar.css'
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import UsuarioContext from './UsuarioContext';

export default function NavBar(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {logado} = useContext(UsuarioContext);

    return(
        <div className={`app-${theme}`}>
        <h1>{theme}</h1>
        <button onClick={toggleTheme}>Troca o tema</button>

        </div>
    );
}