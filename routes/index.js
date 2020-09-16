var router = require("express").Router()
var db = require("../models")

router.get("/api/news", function(req, res){
    console.log("GET ROUTE")
    db.find({}).then(function(records){
        console.log(records)
        res.json(records)
    })
})

router.get("/api/news/:id", function(req, res){
    db.find({_id:req.params.id}).then(function(records){
        console.log(records)
        res.json(records)
    })
})

router.delete("/api/news/:id", function(req, res){
    db.findByIdAndRemove(req.params.id).then(function(records){
        console.log(records)
        res.json(records)
    })
})
router.post("/api/news", function(req, res){
    console.log("post",req.body)
    db.create(req.body).then(function(records){
        console.log(records)
        res.json(records)
    })
})



module.exports= router
