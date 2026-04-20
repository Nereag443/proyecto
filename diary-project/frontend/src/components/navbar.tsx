import { Link } from 'react-router-dom'
import { Button } from './button'
import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'


export function Navbar () {
    const context = useContext(ThemeContext);
        if (!context) {
    throw new Error('ThemeContext is not provided');
    }
    const { darkMode, toggleTheme } = context;
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex p-4 divide-x divide-gray-600">
                <Link to="/" className='px-4'>Inicio</Link>
                <Link to="/mySpace" className='px-4'>Mi espacio</Link>
                <Link to="/stats" className='px-4'>Estadísticas</Link>
                <Link to="/profile" className='px-4'>Perfil</Link>
            </div>
            <Button 
                onClick={toggleTheme}
                text={darkMode ? "🌙" : "☀️"}
                className='rounded-full w-10 h-10 cursor-pointer bg-gray-600 hover:bg-gray-700' />
        </nav>
    )
}