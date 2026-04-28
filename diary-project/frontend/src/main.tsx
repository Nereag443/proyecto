import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/themeProvider'
import { AuthProvider } from './context/authContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<AuthProvider>*/}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/*</AuthProvider>*/}
  </StrictMode>,
)
