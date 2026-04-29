import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/themeProvider'
import { LoadingProvider } from './context/loadingContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<AuthProvider>*/}
    <ThemeProvider>
      <LoadingProvider>
      <App />
      </LoadingProvider>
    </ThemeProvider>
    {/*</AuthProvider>*/}
  </StrictMode>,
)
