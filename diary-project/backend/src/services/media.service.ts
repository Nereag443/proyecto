import { db } from '../config/db';

export interface Media {
    id: number;
    title: string;
    type: string;
    rating: number;
    review: string | null;
    date_added: string;
    user_id: number;
}

export const getAllMedia = (): Media[] => {
    return db.prepare('SELECT * FROM media').all() as Media[];
}

export const createMedia = (media: Omit<Media, 'id' | 'date_added'>): Media => {
    const date = new Date().toISOString();
    const stmt = db.prepare(
        `INSERT INTO media (title, type, rating, review, user_id, date_added) VALUES (?, ?, ?, ?, ?, ?)`
    );
    const result = stmt.run(media.title, media.type, media.rating, media.review, media.user_id, date);
    return {
        id: result.lastInsertRowid as number,
        ...media,
        date_added: date
    };
};

export const updateMedia = (id: number, media: Partial<Media>): Media => {
    const stmt = db.prepare(
        `UPDATE media SET title = ?, type = ?, rating = ?, review = ? WHERE id = ?`
    );
    const result = stmt.run(media.title, media.type, media.rating, media.review, id);
    if (result.changes === 0) throw new Error('Media not found');
    return db.prepare('SELECT * FROM media WHERE id = ?').get(id) as Media;
};

export const deleteMedia = (id: number): void => {
    const result = db.prepare('DELETE FROM media WHERE id = ?').run(id);
    if (result.changes === 0) throw new Error('Media not found');
};