import express from 'express';
import cors from 'cors';
import userRouter from './routes/user_router.js';
import orderRouter from './routes/order_router.js';
import itemRouter from './routes/item_router.js';
import statsRouter from './routes/stats_router.js';
import pool from "./db/db.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";


const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());


app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/items", itemRouter);
app.use("/api/stats", statsRouter);


pool.connect()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error(" Database connection failed", err);
  });
export default app;