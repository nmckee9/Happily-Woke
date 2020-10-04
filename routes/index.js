const express = require("express");
const router = express.Router();
const News = require("../models/news");
const axios = require("axios");
require('dotenv').config();
const config = require('../config/keys');



router.get("/api/getnews", (req, res) => {
     axios.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=' + config.newsApiKey).then(data => {
        res.json(data.data)
   })
})

router.get("/api/getsearchednews/:query", (req, res) => {
    axios.get('https://newsapi.org/v2/everything?q=' + req.params.query +  '&pageSize=100&apiKey=' + config.newsApiKey).then(data => {
        res.json(data.data)
})
})
  
router.get("/api/articles", function(req, res){
    console.log("GET ROUTE")
    News.find({}).then(function(records){
        console.log(records)
        res.json(records)
    })
})

router.get("/api/articles/:id", function(req, res){
    News.find({_id:req.params.id}).then(function(records){
        console.log(records)
        res.json(records)
    })
})

router.delete("/api/articles/:id", function(req, res){
    News.findByIdAndRemove(req.params.id).then(function(records){
        console.log(records)
        res.json(records)
    })
})

router.post("/api/articles", function(req, res){
    console.log("post",req.body)
    News.create(req.body).then(function(records){
        console.log(records)
        res.json(records)
    })
})


module.exports = router