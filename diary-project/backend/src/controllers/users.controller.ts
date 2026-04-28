import * as usersService from '../services/users.service';
import { Request, Response, NextFunction } from 'express';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, password } = req.body;
        const user = usersService.registerUser(username, email, password);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const user = usersService.loginUser(username, password);
        res.json(user);
    } catch (error) {
        next(error);
    }
};