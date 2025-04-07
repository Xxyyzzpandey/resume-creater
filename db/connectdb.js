import mongoose from "mongoose";

const connectDB = async () => {
    try{
  if (mongoose.connections[0].readyState){
    console.log("already connected")
  }
  const db=await mongoose.connect(process.env.MONGODB_URI)
  if(db.connection){
    console.log("connected to db..")
  }
}catch(error){
    console.log("problem in connecting db " + error);
}
};

export default connectDB;
