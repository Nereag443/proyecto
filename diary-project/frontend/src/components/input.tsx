interface InputProps {
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    type?: string,
    className?: string,
    error?: string
}

export function Input (props: InputProps) {
    return (
        <div className="flex flex-col w-full rounded-lg border border-gray-300 p-2">
            <input
                type={props.type || "text"}
                value={props.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    props.onChange(e.target.value)}
                placeholder={props.placeholder}
                className={props.className}/>
            {props.error && 
                <span className="text-red-500">{props.error}</span>}
        </div>
    )
}