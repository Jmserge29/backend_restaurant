import { Router } from "express";
import { getCompanyInformation } from "../Controllers/CompanyController.js";
const router = Router()

router.get("/getAdminInformation", getCompanyInformation)
export default router;