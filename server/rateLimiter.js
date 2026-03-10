import {rateLimit} from 'express-rate-limit';

const limiter = rateLimit({
    windowMs:15 * 60 * 1000,
    max: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
    statusCode: 429,
    message: 'You have exceeded the 3 requests in 24 hrs limit!', 

})

export default limiter;