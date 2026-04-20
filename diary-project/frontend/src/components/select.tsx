interface SelectProps {
    options: string[],
    value: string,
    onChange: (value: string) => void,
    className?: string,
    error?: string
}

export function Select(props: SelectProps) {
    return (
        <div className="flex flex-col w-full rounded border border-gray-300 p-2 focus:outline-none">
        <select 
            value={props.value} 
            onChange={(e) => props.onChange(e.target.value)} 
            className={props.className}>
            {props.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        {props.error && 
                <span className="text-red-500">{props.error}</span>}
        </div>
    )
}