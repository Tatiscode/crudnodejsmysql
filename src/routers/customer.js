const express =require ('express');
const router =express.Router();

router.get('/',(req,res )=>{
    res,send("Hola Didi,I love you pene")
});

module.exports=router;