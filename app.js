const express=require("express")
const app=express()

const productRouter=require("./routes/productRoute")

app.use(express.json())
app.use("",productRouter)

app.listen(8000,()=>{
    console.log("Server is running at 8000.")
})


//echo "# Backend-Sample" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Sheikh-369/Backend-Sample.git
// git push -u origin main