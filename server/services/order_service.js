import pool from '../db/db.js';

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

export const getOrderById = async (id) => {
  const { rows } = await pool.query(
    `
        SELECT 
            orders.id AS order_id,
            orders.status,
            users.username,
            users.useremail,
            items.name AS item_name,
            items.price,
            items.quantity
        FROM orders
        JOIN users
          ON orders.user_id = users.id
        JOIN items
          ON items.order_id = orders.id
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
