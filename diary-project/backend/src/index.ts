import express from 'express';
import cors from 'cors';
import mediaRoutes from './routes/media.routes';
import usersRoutes from './routes/users.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/media', mediaRoutes);
app.use('/api/v1/users', usersRoutes);

app.use ((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    if (err.message === 'NOT_FOUND') {
        return res.status(404).json({ error: 'Not Found' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});

export default app;