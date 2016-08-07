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
    asset.save(function (err, a) {
        if (err) {
            res.json({
                "error": err,
                "status": false
            });
        }
        else {
            res.json({
                "status": true,
                "id": a._id
            });
        }
    })
    // res.send(asset);
    // res.send("WELL?!");

    //Doha?should we use save here?
    // yes we should :D :D 
});