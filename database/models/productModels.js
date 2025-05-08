const productModel=(sequelize,DataTypes)=>{
    const Product=sequelize.define("product",{
        productName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        productDiscount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        productRating:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
    })
    return Product
}

module.exports=productModel