const mongoose = require('mongoose');
const dbconnet = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/",{},(err,res)=>{
        if(!err){
            console.log("Conexion correcta")
        }
        else{
            console.log("error de conexion");
        }
    })

}
module.exports = dbconnet