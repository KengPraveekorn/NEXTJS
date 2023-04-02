export default (req,res)=>{
    //code
    if(req.method === 'GET'){
        res.send('hello GET')
    }else if(req.method === 'POST'){
        res.send('hello POST')
    }else if(req.method === 'DELETE'){
        res.send("Hello DELETE")
    }else if(req.method === 'PUT'){
        res.send("Hello PUT")
    }else{
        res.status(400).send("Error!!")
    }
}