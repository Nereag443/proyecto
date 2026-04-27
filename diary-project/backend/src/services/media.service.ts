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

export const getAllMedia = (): Promise<Media[]> => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM media', [], (err, rows: Media[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

export const createMedia = (media: Omit<Media, 'id' | 'date_added'>): Promise<Media> => {
    return new Promise((resolve, reject) => {
        const date = new Date().toISOString();
        db.run(
            `INSERT INTO media (title, type, rating, review, user_id, date_added) VALUES (?, ? ,?, ?, ?, ?)`,
        [media.title, media.type, media.rating, media.review, media.user_id, date],
        function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({
                    id: this.lastID,
                    ...media, date_added: date
                });
            }
        });
    });
};

export const updateMedia = (id: number, media: Partial<Media>): Promise<Media> => {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE media SET title = ?, type = ?, rating = ?, review = ? WHERE id = ?`,
            [media.title, media.type, media.rating, media.review, id],
            function (err) {
                if (err) {
                    reject(err);
                } else if (this.changes === 0) {
                    reject(new Error('Media not found'));
                } else {
                    db.get('SELECT * FROM media WHERE id = ?', [id], (err, row: Media) => {
                    if (err) {
                        reject(err);
                    }else {
                    resolve(row);
                    }
                    });
                }
            });
    });
}

export const deleteMedia = (id: number): Promise<void> => {
    return new Promise((resolve, reject ) => {
        db.run('DELETE FROM media WHERE id = ?', [id], function (err) {
            if (err) {
                reject (err);
            }else if (this.changes === 0) {
                reject(new Error('Media not found'));
            }else {
                resolve();
            }
        });
    });
};