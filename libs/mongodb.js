import mongoose from "mongoose";
import { traceGlobals } from "next/dist/trace/shared";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB.")
    } catch (error) {
       console.log(error) 
    }
}

export default connectMongoDB;