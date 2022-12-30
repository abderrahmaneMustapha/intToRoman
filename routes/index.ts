import express from 'express';
import convertions from './convertion.routes'
import subscribers from './subscriber.routes'
const router = express.Router()

router.use(subscribers)
router.use(convertions)

export default router
