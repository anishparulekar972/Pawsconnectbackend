const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const apiController = require('../controllers/api')
const checkAuth = require('../controllers/checkAuth');
const numb = apiController.num;
const db = require('./db');
const store_db = apiController.storedb;

router.get("/", (req,res) =>{
    res.render("index");
  });

  router.get('/tester', (req, res) => {
    const { id } = req.query;
    res.status(200).send("tester: " + id);
  })


  router.get("/posts", async (req,res) =>{
    db.query('SELECT email FROM maw_users WHERE user_id = ?', [2], async(error, results) => {
        if(error){
            console.log(error);
        } else{
            const out = results[0].email
            console.log(out);
            return res.render('posts', {
                title: out
            })
        }
    })
  });



router.get("/test", apiController.test)



router.get('*', function(req, res){
  res.render("notfound");
});

module.exports = router;
