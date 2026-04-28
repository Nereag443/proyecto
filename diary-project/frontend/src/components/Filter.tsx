import { Button } from "./button";

interface FilterProps {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
    className?: string;
    error?: string;
}

export function Filter ({ options, selected, onChange }: FilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            <Button 
                className={`cursor-pointer px-4 py-2 rounded-full border ${selected === "" ? "bg-gray-600 text-white" : "bg-white text-black hover:bg-gray-300 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-600"}`}
                onClick={() => onChange('')}>
                Todos
            </Button>
            {options.map((option) => (
                <Button 
                    key={option}
                    className={`cursor-pointer px-4 py-2 rounded-full border ${selected === option ? "bg-gray-600 text-white" : "bg-white text-black hover:bg-gray-300 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-600"}`}
                    onClick={() => onChange(option)}>
                    {option}
                </Button>
            ))}
        </div>
    );
}