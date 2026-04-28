interface ButtonProps {
    text?: React.ReactNode;
    onClick: () => void
    className?: string
    children?: React.ReactNode
}

export function Button(props: ButtonProps) {
    return (
        <button 
            onClick={props.onClick} 
            className={props.className || "bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600 transition-colors duration-300 w-full"}>
            {props.text}
            {props.children}
        </button>)
}