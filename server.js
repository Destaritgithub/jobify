import 'express-async-errors';
import express from 'express';
const app = express();
import dotenv from 'dotenv';

dotenv.config();
//db and authenticateUser
import connectDB from './db/connectdb.js';

//router
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';
// middleware
import notFoundMiddleware from './middleware/notfound.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json());
app.get('/', (req, res) => {
  throw new Error('error');
  res.send('Welcome!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);
// middleware

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log('Database is connected '));
  } catch (error) {
    console.log(error);
  }
};
start();
