import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

export default function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //logic for changing theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}