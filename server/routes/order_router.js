import express from 'express';
import { pool } from '../db/pool.js';

const router = express.Router();

// GET all orders with user info

export default router;
router.get('/', async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json({
      status: 'success',
      results: orders.length,
      data: { orders },
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: 'fail',
      message: err.message || 'Internal Server Error',
    });
  }
});

// GET order by id
router.get('/:id', async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);

    if (order.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: 'Order not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { order },
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: 'fail',
      message: err.message || 'Internal Server Error',
    });
  }
});
