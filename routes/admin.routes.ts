import { Router } from "express";
import { adminLoginController } from "../controllers/admin.login";

export const adminRouter = Router()
adminRouter.get('/login', adminLoginController)
