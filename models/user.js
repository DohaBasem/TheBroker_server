/**
 * Created by DOHA on 01/08/2016.
 */
var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    token: String
});
var User=mongoose.model('User',userSchema);
module.exports=User;
