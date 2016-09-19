console.log('friends model is working!');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  bday : Date
})

mongoose.model('Friend', FriendSchema)
