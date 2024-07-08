import express, { json } from 'express';
import dotenv from 'dotenv';
import contactRouter from './routes/contactRoutes.js'
import userRouter from './routes/userRoutes.js'
import { errorHandler } from './middleware/errorhandler.js';
import { connectDb } from './config/dbConnection.js';
dotenv.config();

connectDb();

const port = process.env.PORT || 5000;
const app = express();

app.use(json());
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}...`)
})