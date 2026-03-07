import pool from '../db/db.js';


export const getAllUsers = async () =>{
    const {rows} = await pool.query(`
        SELECT * 
        FROM 
        users`);
    console.log(rows);
    return rows;
}

export const getSingleUser = async (user_id) =>{
    const {rows} = await pool.query(`
        SELECT * 
        FROM users
        WHERE id = $1`, [user_id]);
    console.log(rows);
    return rows[0];
}

export const addUsers = async (userData) =>{
    // id, username, useremail, phonenumber, created_at
    const {username, useremail, phonenumber} = userData;
    console.log("I am in the user service");

    const {rows} = await pool.query(
        `
        INSERT INTO users (username, useremail, phonenumber)
        VALUES ($1, $2, $3)
        RETURNING *
        `, 
        [username, useremail, phonenumber]);

    console.log(rows);
    return rows[0];
}

export const deleteUsers = async (userId) =>{
    console.log("I am in the user service deleting");
    const {rows} = await pool.query(
        `
        DELETE
        FROM users
        WHERE id = $1
        RETURNING *
        `, 
        [userId]);

    console.log(rows);
    return rows;
}

export const updateUsers = async (userId, userData) =>{
    const { username, useremail, phonenumber} = userData;
    console.log("I am in the user service updating");
    const {rows} = await pool.query(
        `
        UPDATE users
        SET username = $2, useremail = $3, phonenumber = $4
        WHERE id = $1

        RETURNING *
        `, 
        [userId, username, useremail, phonenumber]);

    console.log(rows);
    return rows[0];
}