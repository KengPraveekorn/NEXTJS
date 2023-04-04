import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    detail:{
        type: String
    },
    price:{
        type: Number,
        require: true    // ต้องส่งค่ามา ถ้าไม่ส่งจะ error
    },
    status:{
        type: Boolean,
        default: true   // ไม่ต้องส่งอะไร จะกำหนดค่าเริ่มต้นให้
    }
},{ timestamps: true })


export default mongoose.models.Product || mongoose.model('Product', productSchema)