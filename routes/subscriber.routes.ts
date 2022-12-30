import express from "express"
import controller from "../controllers/subscriber.controller"

const router = express.Router()

router.route('/subscribe').get(controller.subscribe)

export default router