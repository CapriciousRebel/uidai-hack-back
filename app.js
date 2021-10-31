/* npm packages */
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';

/* Import Routers */
import homeRouter from './src/routers/home';

/* Initialize */
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
const MONGOURI = process.env.mongoURI;

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

/* Routes */
app.use('/', homeRouter);
app.use('*', (req, res) => res.status(404));

mongoose.connect(MONGOURI).then(() => console.log('MongoDB successfully connected'))
	.catch((err) => console.error(err));

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});

export default app;
