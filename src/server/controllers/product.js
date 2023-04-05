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
        const listData = await Product.find({}).exec()
        console.log(listData);
        res.send(listData)
    } catch(err){
        console.log(err);
        res.status(400).send("Server list Error!")
    }
}

export const read = async(req,res)=>{     // read คือการดูรายการใดรายการ 1 คือดู ID ของรายการ
    try{
        const id = req.query.id
        const readData = await Product.findOne({_id:id}).exec()
        console.log(readData);
        res.send(readData)
    } catch(err){
        console.log(err);
        res.status(400).send("Server read Error!")
    }
}

export const update = async(req,res)=>{     
    try{
        const id = req.query.id
        const updateData = await Product.findOneAndUpdate({_id:id},req.body,{new: true}).exec()
        console.log(updateData);
        res.send(updateData)
    } catch(err){
        console.log(err);
        res.status(400).send("Server update Error!")
    }
}

export const remove = async(req,res)=>{     
    try{
        const id = req.query.id
        const removeData = await Product.findByIdAndDelete({_id:id}).exec()
        console.log(removeData);
        res.send(removeData)
    } catch(err){
        console.log(err);
        res.status(400).send("Server remove Error!")
    }
}