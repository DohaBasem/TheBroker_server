/**
 * Created by DOHA on 02/08/2016.
 */
var express =require('express');
var router=express.Router();

var assets=require('./models/asset');
router.post('/addItem',function (req,res,next) {
    var assetData={
    Address:req.header("Address"),
    location:req.header("Location"),
    country:req.header("Country"),
    price:req.header("Location"),
    owner:req.header("price")

    };

    console.log("ADD ITEM");
    var asset=new assets(assetData);
   // res.send(asset);
   // res.send("WELL?!");

    //Doha?should we use save here?
})