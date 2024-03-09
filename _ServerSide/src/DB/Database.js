import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const database = await mongoose.connect(`${process.env.BLOG_URL}`)
        
    } catch (error) {
        console.log("Database is not connected!", error)
       
    }
}
export default connectDB;

