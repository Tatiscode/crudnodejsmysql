const express =require ('express');
const router =express.Router();

const customerController= require('../controllers/customerControllers')

router.get('/', customerController.list);
module.exports=router;