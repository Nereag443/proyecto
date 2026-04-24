import { Button } from "../components/button";
import { Input } from "../components/input";
import { Modal } from "../components/modal";
import { useState } from "react";
import { Select } from "../components/select";
import { MediaCard } from "../components/mediaCard";
import { Rating } from "../components/rating";
import { createMedia, getMedia } from "../api/client";
import { useEffect } from "react";
import type { Media } from "../types/media";

export function MySpace () {
    const [media, setMedia] = useState<Media[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState({title: "", type: ""});
    const [loading, setLoading] = useState(false);
    const handleDelete = async (id?: number) => {
        const response = await fetch(`http://localhost:3001/api/v1/media/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            console.error("Failed to delete media with id:", id);
            return;
        }
        setMedia(prev => prev.filter(item => item.id !== id));
    }


    const handleEdit = async (updatedMedia: Media) => {
        const response = await fetch(`http://localhost:3001/api/v1/media/${updatedMedia.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(updatedMedia)
        });
        if (!response.ok) {
            throw new Error('Failed to update media');
        }

        const savedMedia = await response.json();
        setMedia(prev => prev.map(item => item.id === savedMedia.id ? savedMedia : item));
    }

    useEffect(() => {
        setLoading(true);
        getMedia()
            .then(setMedia)
            .catch((error) => {
                console.error("Error cargando datos:", error);
            })
            .finally(() => setLoading(false));
    }, []);
    
    const handleSave = async () => {
        const newErrors = { title: "", type: ""};
        if (title.trim() === "") {
            newErrors.title = "El título es obligatorio";
        }
        if (type.trim() === "") {
            newErrors.type = "El tipo es obligatorio";
        }
        setErrors(newErrors);

        if (Object.values(newErrors).every((error) => error === "")) {
            try {
                const newMedia = await createMedia({
                    title,
                    type,
                    rating,
                    review,
                    user_id: 1
                });
                setMedia(prev => [...prev, newMedia]);
                setIsModalOpen(false);
            } catch (error) {
            console.error("Error al crear medio:", error);
            }
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
                    {loading ? ( <p>Cargando...</p>) : 
                        (media.map((item) => (
                            <MediaCard key={item.id} {...item}
                            onDelete={() => handleDelete(item.id)}
                            onEdit={handleEdit} />
                        ))

                    )}
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
                            value={review}
                            placeholder="Introduce una reseña"
                            onChange={(value) => setReview(value)} />
                        <Rating 
                            rating={rating} 
                            onChange={(value) => setRating(value)} />
                        <Button text="Guardar" onClick={handleSave} />
                    </Modal>
            </div>
        </div>
    )
}