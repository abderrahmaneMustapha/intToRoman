import express from "express"
import controller from "../controllers/convertion.controllers"
import makeHttpCallback from "./utils/make-callback"

const router = express.Router()

router.route('/convertion').get(makeHttpCallback(controller.intToRoman))

export default router