import mongoose from "mongoose";

export const connectDB = async ()=>{     // async รอฉันด้วย เวลาจะดึงข้อมูลต้องใช้เวลา
    try{
        //code
        await mongoose.connect('mongodb://localhost:27017/product')
        console.log('Connected DB');
    }catch(err){
        console.log(err);
    }
}