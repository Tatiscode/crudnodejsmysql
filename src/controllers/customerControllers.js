const { get, connect } = require("../routers/customer");

const controller= {};

controller.list= (req,res)=>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customer', (err,customer)=>{
            if (err) {
                res.json(err);
            }
            res.render('');
        })

    });
};

module.exports=controller;