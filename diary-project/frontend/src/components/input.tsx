interface InputProps {
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    type?: string,
    className?: string,
}

export function Input (props: InputProps) {
    return (
        <input
            type={props.type || "text"}
            value={props.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                props.onChange(e.target.value)}
            placeholder={props.placeholder}
            className={props.className}/>
    )
}