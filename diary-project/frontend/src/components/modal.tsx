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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center"
        onClick={onClose}>
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded shadow-md flex flex-col items-center gap-4 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <Button onClick={onClose} className="w-8 h-8 cursor-pointer">
                    <i className="fa-solid fa-x text-gray-700"></i>
                </Button>
            </div>
            {children}
        </div>
        </div>
    );
}