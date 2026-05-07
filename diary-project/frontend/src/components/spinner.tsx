import { useState, useEffect } from "react";


export function Spinner() {
    const [showWakeUpMessage, setShowWakeUpMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWakeUpMessage(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
            <i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i>
            {showWakeUpMessage && (
                <p className="text-gray-500">Iniciando el servidor…</p>
            )}
        </div>
    );
}