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

export const updateMedia = async (id: number, media: Omit<Media, 'id' | 'date_added'>): Promise<Media> => {
    const response = await fetch(`${API_URL}/media/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(media)
    });
    if (!response.ok) {
        throw new Error('Failed to update media');
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

export const registerUser = async (username: string, email: string, password: string) => {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });
    if (!response.ok) {
        throw new Error('Failed to register user');
    }
}

export const loginUser = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
        throw new Error('Failed to login user');
    }
    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data;
}