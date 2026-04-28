interface SelectProps {
    options: string[],
    value: string,
    onChange: (value: string) => void,
    className?: string,
    error?: string
}

export function Select(props: SelectProps) {
    return (
        <div className="flex flex-col w-full">
            <div className="relative rounded border border-gray-300 p-2">
        <select 
            value={props.value} 
            onChange={(e) => props.onChange(e.target.value)} 
            className={`
             dark:bg-gray-900
            cursor-pointer
            w-full
            bg-transparent
            outline-none
            border-none
            focus:outline-none
            focus:ring-0
            appearance-none
            text-black
            dark:text-white ${props.className || ""}`}>

            <option value="" disabled hidden>Elige el tipo</option>

            {props.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
            <svg 
                className="fill-current h-4 w-4" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20">
                    <path d="M5.516 7.548a.75.75 0 1 1 1.06-1.06L10 9.94l3.424-3.452a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4z"/>
            </svg>
        </div>
        
        </div>
        {props.error && 
                <span className="text-red-500">{props.error}</span>}
        </div>
    )
}