import OrderCtrl from "../Controllers/OrdersController.js";
import { Router } from "express";

const router = Router()

// Rutes by the API
router.get("/getOrders", OrderCtrl.getsOrders)
router.get("/getsOrdersPending", OrderCtrl.getsOrdersPending)
router.post("/createOrder", OrderCtrl.createOrder)


export default router;