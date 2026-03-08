import {Router} from "express";
import * as statsService from "../services/stats_service.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const result = await statsService.getTotals();
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

export default router;
