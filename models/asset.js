/**
 * Created by DOHA on 01/08/2016.
 */
var moongoose=require('mongoose');
var user=require('./user');
var assetSchema=new moongoose.Schema({
    Address:{
        type:String,
    },
    location_lat:{
        type:Number
    },
    country:{
        type:String
    },
    price:{
        type:Number
    },
   /* owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }*/
});
var Assets=moongoose.model('Assets',assetSchema);
module.exports=Assets;
