import { db } from '../config/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export const registerUser = async (username: string, email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    return new Promise((resolve, reject) => {
        db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
        [username, email, hashedPassword], 
        function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: this.lastID, username, email });
            }
        });
    });
};

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const loginUser = (username: string, password: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row: User) => {
            if (err) {
                reject(err);
            } 
            if(!row) {
                return reject(new Error('Invalid username or password'));
            }

            const isPasswordValid = await bcrypt.compare(password, row.password);
            if (!isPasswordValid) {
                return reject(new Error('Invalid username or password'));
            }
            const token = jwt.sign({ id: row.id, username: row.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
            resolve({ id: row.id, username: row.username, email: row.email, token });
        });
    })
};