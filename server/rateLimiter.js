import {rateLimit} from 'express-rate-limit';

const limiter = rateLimit({
    windowMs:15 * 60 * 1000,
    max: 3,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
    statusCode: 429,
    message: 'Too many request in 15mins!', 

})

export default limiter;