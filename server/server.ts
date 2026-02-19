import "dotenv/config"
import app from "./src/app";
import mongoose from "mongoose";

const connectToDb = async ()=>{
  try{
    if(!process.env.MONGO_URI) throw new Error("Database url missing")
    await mongoose.connect(process.env.MONGO_URI)
    console.log("🔗   Connected to db")
  }catch(err){
    console.log(err)
  }
}
connectToDb();


app.listen(3000, ()=> console.log("📌   Server is running at port 3000......"))
