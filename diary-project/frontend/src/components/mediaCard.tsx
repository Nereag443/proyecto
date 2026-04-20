import { Button } from "./button";

export interface MediaCardProps {
  title: string;
  type: string;
  date: string;
  review: string;
}

export function MediaCard({ title, type, date, review }: MediaCardProps) {
    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white rounded-lg shadow-md p-4 w-full flex gap-4">
            <div className="flex flex-col min-w-32">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{type}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
            <p className="border border-gray-500 rounded-lg p-2 text-sm  text-gray-500 dark:text-gray-400 w-full overflow-hidden break-words">{review}</p>
            <Button 
                text="Editar"
                onClick={() => {}} />
            <Button 
                text="Eliminar"
                onClick={() => {}} />
        </div>
    );

}