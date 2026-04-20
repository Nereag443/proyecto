import { Link } from 'react-router-dom'
import { Button } from './button'

interface NavbarProps {
    onLogout: () => void
}

export function Navbar (props: NavbarProps) {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex space-x-4">
                <Link to="/">Inicio</Link>
                <Link to="/mySpace">Mi espacio</Link>
                <Link to="/stats">Estadísticas</Link>
                <Link to="/profile">Perfil</Link>
            </div>
            <Button 
                onClick={props.onLogout}
                text="Cerrar sesión" />
        </nav>
    )
}