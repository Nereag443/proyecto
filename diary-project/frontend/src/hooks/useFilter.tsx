import { useState, useMemo } from "react";
import type { Media } from "../types/media";

export function useFilter(media: Media[]) {
    const [selectedType, setSelectedType] = useState('');
    const filteredMedia = useMemo(() => {
        if (selectedType === '') {
            return media;
        }
        return media.filter(item => item.type === selectedType);
    }, [media, selectedType]);

    return { selectedType, setSelectedType, filteredMedia };
}