import mongoose from "mongoose";

const connectDb = async() =>{
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("connected to db")
}
export default connectDb