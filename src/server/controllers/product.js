import Product from "../models/product";


export const create = async (req,res)=>{  // async รอฉันด้วย
    try{
        // code
        const newProduct = await new Product(req.body).save()
        console.log(newProduct);
        res.send(newProduct)
    } catch (err){
        //check err
        console.log(err);
        res.status(400).send('Server Create Error!')
    }
     
}

export const list = async(req,res)=>{     // list คือการดูรายการทั้งหมด
    try{
        console.log("Controller list");
        res.send("Controller list")
    } catch(err){
        console.log(err);
        res.status(400).send("Server list Error!")
    }
}

export const read = async(req,res)=>{     // read คือการดูรายการใดรายการ 1 คือดู ID ของรายการ
    try{
        console.log("Controller read");
        res.send("Controller read")
    } catch(err){
        console.log(err);
        res.status(400).send("Server read Error!")
    }
}

export const update = async(req,res)=>{     // read คือการดูรายการใดรายการ 1 คือดู ID ของรายการ
    try{
        console.log("Controller update");
        res.send("Controller update")
    } catch(err){
        console.log(err);
        res.status(400).send("Server update Error!")
    }
}

export const remove = async(req,res)=>{     // read คือการดูรายการใดรายการ 1 คือดู ID ของรายการ
    try{
        console.log("Controller remove");
        res.send("Controller remove")
    } catch(err){
        console.log(err);
        res.status(400).send("Server remove Error!")
    }
}