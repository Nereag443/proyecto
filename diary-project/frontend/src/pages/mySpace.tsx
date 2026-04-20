import { Button } from "../components/button";
import { Input } from "../components/input";
import { Modal } from "../components/modal";
import { useState } from "react";
import { Select } from "../components/select";
import { MediaCard } from "../components/mediaCard";

export function MySpace () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");

    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-4">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Bienvenido a tu espacio</h1>
                <p className="text-lg mb-4">Aqui puedes añadir y ver tus medios consumidos</p>
                <Button 
                    text="Añadir"
                    onClick={() => setIsModalOpen(true)} />
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    title="Añadir medio" >
                        <Input 
                            value={title} 
                            placeholder="Introduce el título del medio"
                            onChange={(value) => setTitle(value)} />
                        <Select 
                            value={type} 
                            options={["Libro", "Película", "Serie", "Videojuego"]}
                            onChange={(value) => setType(value)} />
                        <Input 
                            value={date} 
                            placeholder="Introduce la fecha en que consumiste el medio"
                            onChange={(value) => setDate(value)} />
                        <Button text="Guardar" onClick={() => MediaCard({title, type})} />
                    </Modal>
            </div>
        </div>
    )
}