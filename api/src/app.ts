import express from 'express';
import userRoutes from './interface/routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;
