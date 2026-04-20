interface SelectProps {
    options: string[],
    value: string,
    onChange: (value: string) => void,
    className?: string,
}

export function Select(props: SelectProps) {
    return (
        <select 
            value={props.value} 
            onChange={(e) => props.onChange(e.target.value)} 
            className={props.className}>
            {props.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    )
}