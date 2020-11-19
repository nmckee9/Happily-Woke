const express = require("express");
const router = express.Router();
const News = require("../models/news");
const axios = require("axios");
require('dotenv').config();
const config = require('../config/keys');
const auth = require("../middleware/auth")



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
    News.find({}).then(function(records){
        res.json(records)
    })
})

router.get("/api/articles/:id", function(req, res){
    News.find({_id:req.params.id}).then(function(records){
        res.json(records)
    })
})

router.post("/api/articles", auth, (req, res) => {
    News.create(req.body).then(function(records){
        res.json(records)
    })
})

router.delete("/api/articles/:id", auth, (req, res) => {
    News.findByIdAndRemove(req.params.id).then(function(records){
        res.json(records)
    })
})

module.exports = router