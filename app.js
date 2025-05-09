const express=require("express")
const app=express()

const productRouter=require("./routes/productRoute")

app.use(express.json())
app.use("",productRouter)

app.listen(8000,()=>{
    console.log("Server is running at 8000.")
})


