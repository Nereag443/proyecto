import { useEffect, useState } from 'react'
import { ThemeContext } from './themeContext'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    console.log('Dark mode is now:', darkMode)
    document.documentElement.classList.toggle('dark', darkMode)
    console.log('Document class list:', document.documentElement.classList)
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}