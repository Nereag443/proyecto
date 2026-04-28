import { Button } from "../components/button";
import { Input } from "../components/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../components/modal";
import { useAuth } from "../hooks/useAuth";

export function Profile () {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);
    const { user, logout } = useAuth();
    const [editUsername, setEditUsername] = useState(user?.username || "");
    const [editEmail, setEditEmail] = useState(user?.email || "");

    const handleEdit = async () => {
        
    }

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-4 items-center">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Perfil</h1>
                <p className="text-lg mb-4">Aquí puedes ver tu información de usuario</p>
                <div className="h-60 w-60 mb-4 rounded overflow-hidden border border-gray-300">
                    <img src="https://via.placeholder.com/150" alt="Foto de perfil" />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2 mt-">Nombre de usuario:</h2>
                    <Input 
                        type="text"
                        value={user?.username || ""}
                        placeholder="Nombre de usuario"
                        onChange={() => {}} />
                    <h2 className="text-xl font-bold mb-2 mt-4">Correo electrónico:</h2>
                    <Input 
                        type="email"
                        value={user?.email || ""}
                        placeholder="Correo electrónico"
                        onChange={() => {}} />
                <div className="mt-4">
                    <Button 
                        text="Cerrar sesión"
                        className="bg-red-500 mt-4 hover:bg-red-600 w-full cursor-pointer" 
                        onClick={() => setShowLogout(true)} />

                    <Modal 
                        isOpen={showLogout} 
                        onClose={() => setShowLogout(false)} 
                        title="Cerrar sesión" 
                        className="bg-white text-black dark:bg-gray-900 dark:text-white rounded shadow-md p-4 w-full max-w-sm flex flex-col gap-4">
                            <p>¿Estás seguro de querer cerrar sesión?</p>
                            <div className="flex gap-4 justify-end w-full">
                                <Button 
                                    text="Cancelar"
                                    className="hover:bg-gray-200 border border-gray-500 cursor-pointer p-2 rounded" 
                                    onClick={() => setShowLogout(false)} />
                                <Button 
                                    text="Cerrar sesión" 
                                    className="bg-red-500 hover:bg-red-600 border border-red-500 cursor-pointer p-2 rounded text-white"
                                    onClick={handleLogout} />
                            </div>
                    </Modal>
                </div>
                </div>
            </div>
        </div>
    )
}