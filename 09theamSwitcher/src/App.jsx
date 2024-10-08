import { useState, useEffect } from "react"
import { ThemeProvider } from "./contexts/theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {

  const [themeMode, setThemeMode] = useState('light');

  const changeMode = () => {
    if(themeMode == 'light'){
      setThemeMode('dark')
    }else{
      setThemeMode('light')
    }
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{themeMode, changeMode}}>
      <div className="flex flex-wrap min-h-screen items-center bg-gray-800 border-gray-700 dark:bg-white text-white">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
