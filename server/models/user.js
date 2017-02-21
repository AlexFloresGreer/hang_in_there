var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'UserName is required'] },

    wins: {
      type: Number,
      default: 0
    },

    losses: {
      type: Number,
      default: 0

    },

}, {timestamps: true})

mongoose.model('User', UserSchema);
var User = mongoose.model('User');
