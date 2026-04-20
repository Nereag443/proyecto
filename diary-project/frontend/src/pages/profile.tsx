import { Button } from "../components/button";
import { Input } from "../components/input";

export function Profile () {
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
                        value=""
                        placeholder="Nombre de usuario"
                        onChange={(value) => console.log(value)} />
                    <h2 className="text-xl font-bold mb-2 mt-4">Correo electrónico:</h2>
                    <Input 
                        type="email"
                        value=""
                        placeholder="Correo electrónico"
                        onChange={(value) => console.log(value)} />
                    <h2 className="text-xl font-bold mb-2 mt-4">Contraseña:</h2>
                    <Input
                        type="password" 
                        value=""
                        placeholder="Contraseña"
                        onChange={(value) => console.log(value)} />
                <div className="mt-4">
                    <Button text="Guardar cambios" onClick={() => {}} />
                </div>
                </div>
            </div>
        </div>
    )
}