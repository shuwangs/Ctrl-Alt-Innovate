import {Router} from "express";
import * as userService from "../services/user_service.js";

const router = Router();

// GET USER. "/api/users"

router.get('/', async (req, res) => {
    try {
        const result = await userService.getAllUsers();
        res.status(200).json({ 
            status: 'success', 
            results: result.length, 
            data: { result } 
        });
    } catch(err){
        res.status(err.statusCode || 500).json({ 
        status: 'fail',
        message: err.message || 'Internal Server Error' })
    };
})

router.get('/:userId', async (req, res) => {
    console.log(req.params.userId)
    const user_id = Number(req.params.userId);
    
    try {
        const result = await userService.getSingleUser(user_id);
        res.status(200).json({ 
            status: 'success', 
            data: { result } 
        });
    } catch(err){
        res.status(err.statusCode || 500).json({ 
        status: 'fail',
        message: err.message || 'Internal Server Error' })
    };
})


// POST USERS
router.post('/', async (req, res) => {
    const userData = req.body;
    console.log(userData)
    try {
        const result = await userService.addUsers(userData);
        res.status(201).json({ 
            status: 'success', 
            data: { result } 
        });
    } catch(err){
        res.status(err.statusCode || 500).json({ 
        status: 'fail',
        message: err.message || 'Internal Server Error' })
    };
})


// PUT USER
router.put('/:userId', async (req, res) => {
    const userId = Number(req.params.userId);
    if(!userId ){
        res.status(400).json({
            status: 'fail', 
            message: 'Invalid Request User ID format'
        })
    }
    const userData = req.body;
    console.log(userData)
    try {
        const result = await userService.updateUsers(userId, userData);
        res.status(200).json({ 
            status: 'success', 
            data: { result } 
        });
    } catch(err){
        res.status(err.statusCode || 500).json({ 
        status: 'fail',
        message: err.message || 'Internal Server Error' })
    };
})


// DELETE USERS
router.delete('/:userId', async (req, res) => {
    const userId = Number(req.params.userId);
    if(!userId ){
        res.status(400).json({
            status: 'fail', 
            message: 'Invalid Request User ID format'
        })
    }
    try {
        const result = await userService.deleteUsers(userId);
        console.log(result.count);

        if(result.count === 0) {
            return res.status(404).json({
                status: "fail",
                message: 'User not Found in database'
            })
        }
        res.status(204).send();
    } catch(err){
        res.status(err.statusCode || 500).json({ 
        status: 'fail',
        message: err.message || 'Internal Server Error' })
    };
})




export default router;