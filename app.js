const express = require('express');
const { status } = require('express/lib/response');
const app = express();
app.use(express.json())
require("./DB/conn");
const Data= require("./DB/schema");


app.post('/',async(req, res)=>{
    try{
        const user=new Data(req.body);
        const createUser = await user.save(user);
        res.status(201).send(user)
    }catch(e){res.status(400).send(e);}
})

app.get('/',async(req,res)=>{
    try{
        const showUser= await Data.find();
        res.send(showUser);

    }catch(e){res.send(e);}
})

app.patch('/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const update= await Data.findByIdAndUpdate(_id, req.body,{
            new:true
        })
        if(!update){return res.status(400).send();}
        else{res.send(update);}
       
    }catch(e){res.send(e)}
})
app.listen(8000)

