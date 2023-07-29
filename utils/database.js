import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('mongodb is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"promptai",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected= true;

        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}