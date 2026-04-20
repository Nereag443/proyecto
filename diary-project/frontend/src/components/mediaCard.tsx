import { Button } from "./button";

export interface MediaCardProps {
  title: string;
  type: string;
  date: string;
  review: string;
  rating: number;
}

export function MediaCard({ title, type, date, review, rating }: MediaCardProps) {
    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white rounded shadow-md p-4 w-full flex gap-4">
            <div className="flex flex-col min-w-32">
                <h3 className="text-xl font-bold mb-2 overflow-hidden break-words">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{type}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
            <div className="border border-gray-500 rounded p-2 w-full flex flex-col gap-2 overflow-hidden">
                <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => 
                    (<i key={index} className={index < rating ? "fas fa-star text-yellow-400" : "far fa-star text-gray-400"} />))}
                </div>
                <p className="text-sm  text-gray-500 dark:text-gray-400 break-words">{review}</p>
            </div>
            <Button 
                text="Editar"
                onClick={() => {}} />
            <Button 
                text="Eliminar"
                onClick={() => {}} />
        </div>
    );

}