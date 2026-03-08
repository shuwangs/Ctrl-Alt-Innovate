import pool from '../db/db.js';


export const getTotals = async ()=> {
    console.log ("Getting stats...");
    const {rows} = await pool.query(
        `
        SELECT
        (SELECT COUNT (*) FROM users) AS total_users,
        (SELECT COUNT (*) FROM orders) AS total_orders,
        (SELECT COUNT (*) FROM items) AS total_items
        `
    ) 
    console.log(rows);
    return rows[0];
}