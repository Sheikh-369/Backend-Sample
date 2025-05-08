const { fetchProducts, addProduct, deleteProduct, editProduct, fetchSingleProduct } = require("../controllers/productController")

const router=require("express").Router()

router.route("/product").get(fetchProducts).post(addProduct)
router.route("/product/:id").delete(deleteProduct).patch(editProduct).get(fetchSingleProduct)

module.exports=router