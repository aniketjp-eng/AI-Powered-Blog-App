import fs from "fs"; //File System module.
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog,
    );
    const imageFile = req.file;
    //check  if all field are present
    if (!title || !subTitle || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required fields" });
    }
    const fileBuffer = fs.readFileSync(imageFile.path);
    //Reads uploaded image from local storage into memory as a buffer (binary data).

    //upload Image to ImageKit
    const response = await imagekit.files.upload({
      file: fileBuffer.toString("base64"),
      fileName: imageFile.originalname,
      folder: "/blogs",
    });
    const image = response.url;
await Blog.create({
  title,
  subTitle,
  description,
  category,
  image,
  isPublished,
});

    //optimized through imageKit URL transformation CODE USE HERE -------> 
    res.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
