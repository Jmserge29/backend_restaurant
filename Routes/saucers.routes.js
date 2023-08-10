import SaucersCtrl from "../Controllers/SaucersController.js";
import { Router } from "express";

const router = Router()

// Rutes by the API
router.get("/getSaucers", SaucersCtrl.getsSaucers)


export default router;