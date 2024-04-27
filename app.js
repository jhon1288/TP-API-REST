const express = require ('express');
const dbconnet = require('./config');
const ModelUser = require('./userModel');
const  app = express();


const router = express.Router();

//create - read -update - delete
// cuendo estoy en el post me envia
// algo del cuerpo
router.post("/",async (req,res)=>{
  const body = req.body;
  const respuesta = await ModelUser.create(body);
  res.send(body)  
})

router.get("/id", async(req, res)=>{
    const id =req.params.id;
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
    //("hola guy soy metodo get")
})

app.use(express.json())

app.use(router)

app.listen(3001, () =>{
    console.log("el servidor esta en el puerto 3001");
})
dbconnet();