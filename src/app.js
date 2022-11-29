const express= require('express');
const path = require('path');
const morgan= require('morgan');
const mysql= require ('mysql');
const myConnection=require ('express-myconnection');

const app=express();

//importing routers
 const customerRouters=require('./routers/customer')

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user: 'root',
    password: 'hola',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'))

//routers
app.use('/',customerRouters);

//static files
app.use(express.static(path.join(__dirname, 'public')));
//starting the server
app.listen(app.get('port'),()=>{
    console.log("Server on port 3000");
})