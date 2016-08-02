/**
 * Created by DOHA on 01/08/2016.
 */
var moongoose=require('mongoose');
var user=require('./user');
var assetSchema=new moongoose.Schema({
    Address:{
        type:String,
    },
    location:{
        type:[Number],
        index:'2d'
    },
    country:{
        type:String
    },
    price:{
        type:Number
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});
