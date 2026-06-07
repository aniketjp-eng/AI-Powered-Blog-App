import express from "express";
import { addBlog } from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", auth, upload.single("image"), addBlog);

export default blogRouter;
