import { useState } from "react";
import ThemeContext from "./ThemeContext";


export default function ThemeProvider({children}){
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        setTheme(theme === "light"? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}