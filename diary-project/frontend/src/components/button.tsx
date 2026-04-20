interface ButtonProps {
    text: string,
    onClick: () => void
}

export function Button(props: ButtonProps) {
    return (
        <button 
            onClick={props.onClick} 
            className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600 transition-colors duration-300">
            {props.text}
        </button>)
}