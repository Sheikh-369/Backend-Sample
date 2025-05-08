const { products } = require("../database/connection")

const fetchProducts=async (req,res)=>{
    const datas=await products.findAll()
    res.json({
        message:"Products fetched Successfully!",
        datas
    })
}

const fetchSingleProduct=async (req,res)=>{
    const id=req.params.id
    const datas=await products.findByPk(id)
    res.json({
        message:"Singlge Product fetched Successfully!",
        datas
    })
}

const addProduct=async (req,res)=>{
    const {productName,productPrice,productDiscount,productRating}=req.body
    await products.create({
        productName,
        productPrice,
        productDiscount,
        productRating
    })
    res.json({
        message:"Product added Successfully!"
    })
}

const deleteProduct=async (req,res)=>{
    const id=req.params.id
    await products.destroy({
        where:{
            id
        }
    })

    res.json({
        message:"Product deleted Successfully!"
    })
}

const editProduct=async (req,res)=>{
    const id=req.params.id
    const {productName,productPrice,productDiscount,productRating}=req.body
    await products.update({
        productName,
        productPrice,
        productDiscount,
        productRating
    },{
        where:{
            id
        }
    })
    res.json({
        message:"Product edited Successfully!"
    })
}

module.exports={fetchProducts,fetchSingleProduct,addProduct,deleteProduct,editProduct}