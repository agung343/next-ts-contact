import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            // await mongoose.connect(process.env.MONGODB_URI)
            await mongoose.connect(process.env.MONGODB_URI as string)
            console.log("mongodb connect");
        }
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;