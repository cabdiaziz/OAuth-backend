import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

//? my imports
import databaseConnection from './config/db.js';

import notFoundMiddleware from './middleware/notFoundPage.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

import authRouter from './routes/authRoutes.js';
import serviceRouter from './routes/serviceRoutes.js';

//*database connection
databaseConnection();

//* middleware
app.use(morgan('dev'));
app.use(express.json());

// *routes
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Home hello' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/service', serviceRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});