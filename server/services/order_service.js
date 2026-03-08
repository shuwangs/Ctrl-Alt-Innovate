import pool from '../db/db.js';

// get all orders
export const getAllOrders = async () => {
  const { rows } = await pool.query(`
        SELECT 
            orders.id AS order_id,
            orders.status,
            orders.created_at,
            users.username,
            users.useremail
        FROM orders
        JOIN users
          ON orders.user_id = users.id
        ORDER BY orders.id ASC
    `);
  return rows;
};

// get order by id with items and user info
export const getOrderById = async (id) => {
  const { rows } = await pool.query(
    `
        SELECT 
            orders.id AS order_id,
            orders.status,
            users.username,
            users.useremail
        FROM orders
        JOIN users
          ON orders.user_id = users.id

        WHERE orders.id = $1
    `,
    [id]
  );
  return rows;
};

export const getOrderItems = async (id) => {
  const { rows } = await pool.query(
    `
        SELECT name, price, quantity
        FROM items
        WHERE order_id = $1
    `,
    [id]
  );
  return rows;
};
// Create order
export const createOrder = async ({ user_id, status }) => {
  const { rows } = await pool.query(
    `
        INSERT INTO orders (user_id, status)
        VALUES ($1, $2)
        RETURNING *
    `,
    [user_id, status]
  );
  return rows[0];
};

// Update order
export const updateOrder = async (id, { status }) => {
  const { rows } = await pool.query(
    `
        UPDATE orders
        SET status = $1
        WHERE id = $2
        RETURNING *
    `,
    [status, id]
  );
  return rows[0];
};

/// Delete order
export const deleteOrder = async (id) => {
  const { rows } = await pool.query(
    `
        DELETE FROM orders
        WHERE id = $1
        RETURNING *
    `,
    [id]
  );
  return rows[0];
};
