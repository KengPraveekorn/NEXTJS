import { create, list, read, update, remove } from "@/server/controllers/product"
import { connectDB } from "@/server/config/db"

connectDB();

export default (req,res)=>{
    //code
    if(req.method === 'GET'){
        list(req,res)
    }else if(req.method === 'POST'){
        create(req,res)
    }else if(req.method === 'DELETE'){
        remove(req,res)
    }else if(req.method === 'PUT'){
        update(req,res)
    }else{
        res.status(400).send("Error!!")
    }
}