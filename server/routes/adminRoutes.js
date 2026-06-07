import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import auth from "../middlewares/auth.js";
const adminRouter = express.Router();

adminRouter.post("/login", adminLogin)

export default adminRouter;