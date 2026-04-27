import * as mediaService from '../services/media.service';
import { Request, Response, NextFunction } from 'express';

export const getMedia = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const media = await mediaService.getAllMedia();
        res.json(media);
    } catch (error) {
        next(error);
    }
};

export const  createMedia = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, type, rating, review, user_id} = (req.body);
        if (!title || title.trim() === '') {
            return res.status(400).json({ error: 'Title is required' });
        }
        if (!type || type.trim() === '') {
            return res.status(400).json({ error: 'Type is required' });
        }
        const media = await mediaService.createMedia({ title, type, rating, review, user_id });
        res.status(201).json(media);
    } catch (error) {
        next(error);
    }
};

export const updateMedia = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const { title, type, rating, review } = req.body;
        const media = await mediaService.updateMedia(id, { title, type, rating, review });
        res.json(media);
    } catch (error) {
        next(error);
    }
}

export const deleteMedia = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        await mediaService.deleteMedia(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};