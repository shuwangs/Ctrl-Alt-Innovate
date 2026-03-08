import pool from '../db/db.js';


export const getItermsFromOrder = async (orderID) =>{
    const {rows} = await pool.query(`
        SELECT
        i.name AS item_name,
        i.price AS item_price,
        i.quantity AS item_quantity,
        o.status,
        u.username,
        u.useremail
        FROM items AS i
        LEFT JOIN orders AS o ON i.order_id = o.id
        LEFT JOIN users AS u ON o.user_id = u.id
        WHERE i.order_id = $1`, [orderID]);
    return rows ;
}


export const addItermsToOrder = async (orderID) =>{
    const {rows} = await pool.query(`
        INSERT INTO
        i.name AS item_name,
        i.price AS item_price,
        i.quantity AS item_quantity,
        o.status,
        u.username,
        u.useremail
        FROM items AS i
        LEFT JOIN orders AS o ON i.order_id = o.id
        LEFT JOIN users AS u ON o.user_id = u.id
        WHERE i.order_id = $1`, [orderID]);
    return rows ;
}
