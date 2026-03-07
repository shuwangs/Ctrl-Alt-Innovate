import express from 'express';
import { pool } from '../db/pool.js';

const router = express.Router();

// GET all orders with user info
router.get('/', async (req, res, next) => {
  try {
    const result = await pool.query(
      `SELECT 
        orders.id AS order_id,
        orders.status,
        orders.created_at,
        users.username,
        users.useremail
       FROM orders
       INNER JOIN users
         ON orders.user_id = users.id
       ORDER BY orders.id ASC`
    );

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});
