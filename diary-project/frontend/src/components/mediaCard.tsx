import { useEffect, useState } from "react";
import { Button } from "./button";
import { Modal } from "./modal";
import { Input } from "./input";
import { Select } from "./select";
import { Rating } from "./rating";
import type { Media } from "../types/media";

interface MediaCardProps extends Media {
    onEdit?: (updatedMedia: Media) => void;
    onDelete?: () => void;
}

export function MediaCard({ id, title, type, date_added, review, rating, onEdit, onDelete }: MediaCardProps) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editType, setEditType] = useState(type);
    const [editReview, setEditReview] = useState(review);
    const [editRating, setEditRating] = useState(rating);
    const [errors, setErrors] = useState({title: "", type: ""});
    const [showDelete, setShowDelete] = useState(false);

    const handleSave = () => {
        const newErrors = { title: "", type: ""};
        if (editTitle.trim() === "") {
            newErrors.title = "El título es obligatorio";
        }
        if (editType.trim() === "") {
            newErrors.type = "El tipo es obligatorio";
        }
        setErrors(newErrors);

        if (Object.values(newErrors).every((error) => error === "")) {
            onEdit?.({ id, title: editTitle, type: editType, review: editReview, rating: Number(editRating), date_added });
            setIsEditModalOpen(false);
        }
    }

    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white rounded shadow-md p-4 w-full flex flex-col md:flex-row gap-4">
            <div className="flex flex-col min-w-32">
                <h3 className="text-xl font-bold mb-2 overflow-hidden break-words">{title}</h3>
                <p className="text-sm text-gray-700 mb-4 rounded-full w-fit p-2 bg-gray-400 dark:text-white">{type}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{date_added ? new Date(date_added).toLocaleDateString() : "Fecha no disponible"}</p>
            </div>
            <div className="border border-gray-500 rounded p-2 w-full flex flex-col gap-2 overflow-hidden">
                <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => 
                    (<i key={index} className={index < rating ? "fas fa-star text-yellow-400" : "far fa-star text-gray-400"} />))}
                </div>
                <p className="text-sm  text-gray-500 dark:text-gray-400 break-words">{review}</p>
            </div>
            <div className="flex flex-row md:flex-col gap-2 mt-4">
                <Button 
                    text="Editar"
                    onClick={() => {
                        setEditTitle(title);
                        setEditType(type);
                        setEditReview(review);
                        setEditRating(rating);
                        setIsEditModalOpen(true)}} />

                <Button 
                    text="Eliminar"
                    onClick={() => setShowDelete(true)} />
            </div>
                <Modal 
                    isOpen={isEditModalOpen} 
                    onClose={() => setIsEditModalOpen(false)} 
                    title="Editar media" >
                        <Input 
                            value={editTitle}
                            placeholder="Introduce el título del medio"
                            onChange={(value) => setEditTitle(value)}
                            error={errors.title} />
                        <Select
                            value={editType} 
                            options={["Libro", "Película", "Serie", "Videojuego", "Música"]}
                            onChange={(value) => setEditType(value)}
                            error={errors.type} />
                        <Button text="Añadir categoría" onClick={() => {}} />
                        <Input
                            value={editReview || ""}
                            placeholder="Introduce una reseña"
                            onChange={setEditReview} />
                        <Rating 
                            rating={editRating} 
                            onChange={setEditRating} />
                        <Button text="Guardar" onClick={handleSave} />    
                </Modal>                    
                <Modal 
                    isOpen={showDelete}
                    className="bg-white text-black dark:bg-gray-900 dark:text-white rounded shadow-md p-4 w-full max-w-sm flex flex-col gap-4"
                    onClose={() => setShowDelete(false)} 
                    title="Eliminar media" >
                        <p>¿Estas seguro de que quieres eliminar este medio?</p>
                        <div className="flex gap-4 justify-end w-full">
                        <Button 
                            text="Cancelar" 
                            className="hover:bg-gray-200 border border-gray-500 cursor-pointer p-2 rounded"
                            onClick={() => setShowDelete(false)} />
                        <Button 
                            text="Eliminar" 
                            className="bg-red-500 hover:bg-red-600 border border-red-500 cursor-pointer p-2 rounded text-white"
                            onClick={() => { onDelete?.(); setShowDelete(false) }} />
                        </div>
                </Modal>
        </div>
    );

}