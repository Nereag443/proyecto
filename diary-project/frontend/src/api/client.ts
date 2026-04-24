const API_URL = 'http://localhost:3001/api/v1';
import type { Media } from "../types/media";

export const getMedia = async (): Promise<Media[]> => {
    const response = await fetch(`${API_URL}/media`);
    if(!response.ok) {
        throw new Error('Failed to fetch media');
    }
    return response.json();
}

export const createMedia = async (media: Omit<Media, 'id' | 'date_added'>): Promise<Media> => {
    const response = await fetch(`${API_URL}/media`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(media)
    });
    if (!response.ok) {
        throw new Error('Failed to create media');
    }
    return response.json().then((data) => {
        return data as Media
    })
}

export const deleteMedia = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/media/${id}`, {
        method: 'DELETE'
        });
        if(!response.ok) {
            throw new Error('Failed to delete media');
    }
}
