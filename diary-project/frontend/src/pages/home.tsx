import { Button } from "../components/button";
import { Input } from "../components/input";
import { Modal } from "../components/modal";
import { useState } from "react";

export function Home () {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-4">
            <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Bienvenido a tu diario de consumo</h1>
            <p className="text-lg mb-4">Aquí puedes registrar y analizar tus hábitos de consumo de medios</p>
            <Button text="Iniciar sesión" onClick={() => setIsLoginOpen(true)} />
            <Modal 
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                title="Iniciar sesión" >

                <Input 
                    value={username}
                    onChange={(value) => setUsername(value)}
                    placeholder="Nombre de usuario" 
                    type="text" />
                <Input 
                    value={password}
                    onChange={(value) => setPassword(value)}
                    placeholder="Contraseña"
                    type="password" />
                <p 
                    className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer"
                    onClick={() => {setIsLoginOpen(false); setIsRegisterOpen(true)}}>
                        No tienes una cuenta? Registrate
                </p>
                <Button 
                    text="Iniciar sesión"
                    onClick={() => {}} />
            </Modal>
            <Modal 
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                title="Registrarse" >
                <Input 
                    value={username}
                    onChange={(value) => setUsername(value)}
                    placeholder="Nombre de usuario" 
                    type="text" />
                <Input 
                    value={email} 
                    onChange={(value) => setEmail(value)}
                    placeholder="Correo electrónico"
                    type="email" />
                <Input 
                    value={password} 
                    onChange={(value) => setPassword(value)}
                    placeholder="Contraseña"
                    type="password" />
                <p 
                    className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer"
                    onClick={() => { setIsRegisterOpen(false); setIsLoginOpen(true)}}>
                        Ya tienes una cuenta? Inicia sesión
                </p>
                <Button 
                    text="Registrarse"
                    onClick={() => {}} />

            </Modal>
            </div>
        </div>
    )
}