import { Button } from "../components/button";
import { Input } from "../components/input";
import { Modal } from "../components/modal";
import { useState } from "react";
import { registerUser, loginUser } from "../api/client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Home () {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({username: "", password: ""});
    const [registerErrors, setRegisterErrors] = useState({username: "", email: "", password: ""});
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        const errors = { username: "", password: "" };
        if(username.trim() === "") {
            errors.username = "El nombre de usuario es requerido";
        }
        if(password.trim() === "") {
            errors.password = "La contraseña es requerida";
        }
        setErrors(errors);
        if (Object.values(errors).some((error) => error !== "")) {
            return;
        }

        try {
            const user = await loginUser(username, password);
            login(user);
            setIsLoginOpen(false);
            navigate("/mySpace");
        } catch (error) {
            setErrors({ username: "", password: "El nombre de usuario o la contraseña son incorrectos" });
        }
    }

    const handleRegister = async () => {
        const errors = { username: "", email: "", password: "" };
        if (username.length < 3) {
            errors.username = "El nombre de usuario debe tener al menos 3 caracteres";
        }
        if (!email.includes("@")) {
            errors.email = "El correo debe ser válido";
        }
        if (password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres";
        }
        setRegisterErrors(errors);
        if (Object.values(errors).some((error) => error !== "")) {
            return;
        }

        try {
            await registerUser(username, email, password);
            setIsRegisterOpen(false);
            navigate("/mySpace");
        } catch (error) {
            setRegisterErrors({ username: "Este usuario ya existe", email: "", password: "" });
        }
    }


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
                    type="text"
                    error={errors.username} />
                <Input 
                    value={password}
                    onChange={(value) => setPassword(value)}
                    placeholder="Contraseña"
                    type="password"
                    error={errors.password} />
                <p 
                    className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer"
                    onClick={() => {setIsLoginOpen(false); setIsRegisterOpen(true)}}>
                        No tienes una cuenta? Registrate
                </p>
                <Button 
                    text="Iniciar sesión"
                    onClick={handleLogin} />
            </Modal>
            <Modal 
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                title="Registrarse" >
                <Input 
                    value={username}
                    onChange={(value) => setUsername(value)}
                    placeholder="Nombre de usuario" 
                    type="text"
                    error={registerErrors.username} />
                <Input 
                    value={email} 
                    onChange={(value) => setEmail(value)}
                    placeholder="Correo electrónico"
                    type="email"
                    error={registerErrors.email} />
                <Input 
                    value={password} 
                    onChange={(value) => setPassword(value)}
                    placeholder="Contraseña"
                    type="password"
                    error={registerErrors.password} />
                <p 
                    className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer"
                    onClick={() => { setIsRegisterOpen(false); setIsLoginOpen(true)}}>
                        Ya tienes una cuenta? Inicia sesión
                </p>
                <Button 
                    text="Registrarse"
                    onClick={handleRegister} />

            </Modal>
            </div>
        </div>
    )
}