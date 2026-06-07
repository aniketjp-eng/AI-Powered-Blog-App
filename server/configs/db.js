import mongoose from "mongoose";

const connectDb =  async () =>{
    try {
        mongoose.connection.on('connected', () => 
        console.log("Database Connected") //📱 "When my friend picks up the call, tell me."
        )
    await mongoose.connect(`${process.env.MONGODB_URL}/aniketDb`) //📞 "Call my friend."
    } catch (error) {
       console.log(error.message);
       
    }
}

export default connectDb;