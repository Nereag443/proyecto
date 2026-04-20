interface RatingProps {
    rating: number;
    onChange: (rating: number) => void;
}

export function Rating ({ rating, onChange }: RatingProps) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => 
                (<i key={index} className={index < rating ? "fas fa-star text-yellow-400 cursor-pointer" : "far fa-star text-gray-400 cursor-pointer"} 
                onClick={() => onChange(index + 1)} />))}
        </div>
    )
}