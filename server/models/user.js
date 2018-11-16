var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },name:{
    type: String,
    trim:true,
    required:true,
    minlength:1
  }
});

module.exports = {User};
