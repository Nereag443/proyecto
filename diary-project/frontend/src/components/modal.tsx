import {Button} from "./button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
            <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded shadow-md">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <Button text="Cerrar" onClick={onClose} />
                {children}
            </div>
        </div>
    );
}