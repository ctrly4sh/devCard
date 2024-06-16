import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light" ,
    darkTheme : () => {},
    lightTheme: () => {}
});

//for better wrapping up 
export const ThemeProvider = ThemeContext.Provider; 


//custom hook for theme
export default function useTheme (){
    return useContext(ThemeContext)
}