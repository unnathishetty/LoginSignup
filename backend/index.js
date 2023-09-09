const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express();
const port=8000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());


app.get("/",cors(), (req,res)=>{
    res.json("sucess")
 })

app.post("/login", async(req,res) => {
    const{email, password} = req.body

    try{
        const user = await collection.findOne({email:email})
        if(user){
            if(user.password===password){
                return res.status(200).json({"success":true})
            }
            return res.status(400).json({"error":"invalid creditentials"})
        }
        return res.status(400).json({"error":" not exists"})
    }
    catch(e){
        res.json("not exists")
    }
})

app.post("/signup", async(req,res) => {
    

    try{
        const{email, password} = req.body

    const data={
        email:email,
        password:password
    }

        const check = await collection.findOne({email:email})
        if(check){
            return res.status(400).json("exists")
        }

            const user = await collection.create(data)
            await user.save();
            return res.status(200).json("Not exists")
    }
    catch{
        return res.status(500).json("not exists")
    }
})
 

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})
