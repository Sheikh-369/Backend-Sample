const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize("postgresql://postgres.mskgrvtmmmgxyramkpqt:backendsample123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")//connection string backendsample123

sequelize.authenticate()
.then(()=>{
    console.log("Authentication Successfull.")
})
.catch((err)=>{
    console.log("Error",err)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.products=require("./models/productModels")(sequelize,DataTypes)

sequelize.sync({alter:false}).then(()=>{
    console.log("Migration Successful!")
})

module.exports=db