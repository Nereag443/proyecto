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
    const stmt = db.prepare(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)'
    );
    const result = stmt.run(username, email, hashedPassword);
    return { 
        id: result.lastInsertRowid, username, email 
    };
};

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const loginUser = async (username: string, password: string) => {
    const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as User | undefined;
    
    if (!row) throw new Error('Invalid username or password');

    const isPasswordValid = await bcrypt.compare(password, row.password);
    if (!isPasswordValid) throw new Error('Invalid username or password');

    const token = jwt.sign({ id: row.id, username: row.username }, JWT_SECRET, { expiresIn: '1h' });
    return { 
        id: row.id, username: row.username, email: row.email, token 
    };
};