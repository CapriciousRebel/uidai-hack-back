/* npm packages */
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

/* Import Routers */
import homeRouter from './src/routers/home';

/* Initialize */
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

/* Routes */
app.use('/', homeRouter);
app.use('*', (req, res) => res.status(404));

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});

export default app;
