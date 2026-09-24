import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n mongoDB connected successfully to ${connectionInstance.connection.host} \n`);
    }catch(error){
        console.log("Error connecting to MongoDB:", error);
        process.exit(1)
    }
}

export default connectDB;