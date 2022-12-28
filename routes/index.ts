import express from 'express';
import convertions from './convertion.routes'

const router = express.Router()

router.use(convertions)

export default router
