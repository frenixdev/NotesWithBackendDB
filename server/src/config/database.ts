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

export default connectToDb
