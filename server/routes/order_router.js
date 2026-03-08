import express from 'express';
import pool from '../db/db.js';
import * as orderService from '../services/order_service.js';

const router = express.Router();

// GET all orders with user info

router.get('/', async (req, res) => {
  console.log('getting orders');
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

//Create order *
router.post('/', async (req, res) => {
  console.log('create order');
  try {
    const newOrder = await orderService.createOrder(req.body);

    res.status(201).json({
      status: 'success',
      data: { order: newOrder },
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: 'fail',
      message: err.message || 'Internal Server Error',
    });
  }
});

//Update order
router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await orderService.updateOrder(
      req.params.id,
      req.body
    );

    if (!updatedOrder) {
      return res.status(404).json({
        status: 'fail',
        message: 'Order not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { order: updatedOrder },
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: 'fail',
      message: err.message || 'Internal Server Error',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedOrder = await orderService.deleteOrder(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({
        status: 'fail',
        message: 'Order not found',
      });
    }

    // Delete order
    res.status(200).json({
      status: 'success',
      message: 'Order deleted successfully',
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: 'fail',
      message: err.message || 'Internal Server Error',
    });
  }
});

export default router;
