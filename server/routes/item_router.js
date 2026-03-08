import {Router} from "express";
import * as itemService from '../services/item_service.js';
const router = Router();

// GET ITEMS
router.get('/:orderId', async(req, res) => {

    const order_id = Number(req.params.orderId);
    if(!order_id ){
        return res.status(400).json({
            status: 'fail', 
            message: 'Invalid Request User ID format'
        })
    }
    try {
        const result = await itemService.getItermsFromOrder(order_id);
        return res.status(200).json({ 
            status: 'success', 
            data: { result } 
        });
    } catch(err){
        res.status(err.statusCode || 500).json({ 
        status: 'fail',
        message: err.message || 'Internal Server Error' })
    };
})

// POST ITEMS


// PUT ITEMS


// DELTE ITEMS


export default router;