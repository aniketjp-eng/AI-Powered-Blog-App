import jwt from "jsonwebtoken";

const auth = (req, res, next)=>{
    const token = req.headers.authorization;

    try {
        if (!token) {
        return res.json({ success: false, message: "No token provided" });
        }
        jwt.verify(token, process.env.JWT_SECRET)
        
        next();
    } catch (error) {
        res.json({success: false, message: "Invalid token"})
    }
}

export default auth;