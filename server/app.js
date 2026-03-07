import express from 'express';
import cors from 'cors';
import userRouter from './routes/user_router.js';
import orderRouter from './routes/order_router.js'
import itemRouter from './routes/item_router.js';

const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/items", itemRouter);

export default app;