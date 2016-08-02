/**
 * Created by DOHA on 01/08/2016.
 */
var connector=function(url,callback){
    var mongoose=require("mongoose");
    var user=require("../models/user");
    var asset=require("../models/asset");
    mongoose.connect(url,function (error) {
       if(error){
        console.log("ERROR");
         callback(false);
       }
       else{
           console.log("No ERROR");
           callback(true);
       }
    });

}
module.exports=connector;