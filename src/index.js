import express from "express";

const app = express()

app.use(express.json())

app.get('/health' , (req , response)=>{
    response.status(200).json({
        "status " : "ok"
    })
    return 
})

app.listen(3000 , ()=>{
    console.log('server started at port 3000')
})