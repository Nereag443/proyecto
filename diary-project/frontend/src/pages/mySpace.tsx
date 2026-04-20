import { Button } from "../components/button";
import { Input } from "../components/input";
import { Modal } from "../components/modal";
import { useState } from "react";
import { Select } from "../components/select";
import { MediaCard } from "../components/mediaCard";
import type { MediaCardProps } from "../components/mediaCard";

export function MySpace () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState({title: "", type: "", date: ""});
    const [media, setMedia] = useState<MediaCardProps[]>([]);
    const handleSave = () => {
        const newErrors = { title: "", type: "", date: "" };
        if (title.trim() === "") {
            newErrors.title = "El título es obligatorio";
        }
        if (type.trim() === "") {
            newErrors.type = "El tipo es obligatorio";
        }
        if (date.trim() === "") {
            newErrors.date = "La fecha es obligatoria";
        }
        setErrors(newErrors);

        if (Object.values(newErrors).every((error) => error === "")) {
            setMedia([...media, { title, type, date, review }]);
            setIsModalOpen(false);
        }
    }

    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-4">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Bienvenido a tu espacio</h1>
                <p className="text-lg mb-4">Aqui puedes añadir y ver tus medios consumidos</p>
                <Button 
                    text="Añadir"
                    onClick={() => setIsModalOpen(true)} />
                <div className="flex flex-col gap-4 mt-4">
                            {media.map((item, index) => (
                                <MediaCard key={index} {...item} />
                            ))}
                        </div>
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    title="Añadir medio" >
                        <Input 
                            value={title} 
                            placeholder="Introduce el título del medio"
                            onChange={(value) => setTitle(value)}
                            error={errors.title} />
                        <Select 
                            value={type} 
                            options={["Libro", "Película", "Serie", "Videojuego", "Música"]}
                            onChange={(value) => setType(value)}
                            error={errors.type} />
                        <Button text="Añadir categoría" onClick={() => {}} />
                        <Input 
                            value={date} 
                            type="date"
                            onChange={(value) => setDate(value)} 
                            error={errors.date} />
                        <Input
                            value={review}
                            placeholder="Introduce una reseña"
                            onChange={(value) => setReview(value)} />
                        <Button text="Guardar" onClick={handleSave} />
                    </Modal>
            </div>
        </div>
    )
}