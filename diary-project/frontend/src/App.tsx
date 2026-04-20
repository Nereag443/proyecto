import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './context/themeContext'
import { Home } from './pages/home'
import { MySpace } from './pages/mySpace'
import { Stats } from './pages/stats'
import { Navbar } from './components/navbar'
import './App.css'
import { Button } from './components/button'
import { useContext } from 'react';
import NotFound from './pages/notFound'
import { Profile } from './pages/profile'

function App() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('ThemeContext is not provided');
  }
  const { toggleTheme } = context;

  return (
    <BrowserRouter>
     <Navbar onLogout={() => {}} />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mySpace" element={<MySpace />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
     </Routes>

      <Button text="Toggle Theme" onClick={(toggleTheme)} />
    </BrowserRouter>
  )
}

export default App
