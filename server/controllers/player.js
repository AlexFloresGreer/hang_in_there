// console.log('player controller');
// var mongoose = require('mongoose');
// var Friend = mongoose.model('Players');
//
// module.exports = {
//
// 	index: function(req,res) {
//     Friend.find({}, function(err, friends) {
//       if(err){
//         console.log('Oops...Something went wrong at index.js!!');
//         res.json(err);
//       }
//       else {
//         res.json(friends);
//       }
//     })
//   },
//   create: function(req,res) {
//     var friend = new Friend({name: req.body.name, lastname: req.body.lastname, bday: req.body.bday});
//     friend.save(function(err) {
//       if(err) {
//         console.log('Oops error at creating friend in friends.js');
//         res.json(err);
//       }
//       else {
//         res.json(friend);
//       }
//     })
//   },
// 	findOne: function(req,res){
// 	    Friend.findOne({_id: req.params.id}, function(err, friend){
// 	      if(err){
// 	        console.log('Errrrr......Something went wrong!!');
// 	        res.json(err);
// 	      }
// 	      else{
// 	        res.json(friend);
// 	      }
// 	    })
// 	  },
//   update: function(req,res){
//     Friend.findOne({_id: req.params.id}, function(err, friend){
//       if(err){
//         console.log("Error encountered..");
//       }
//       else {
//         if(req.body.name)
//           friend.name = req.body.name;
//         if(req.body.lastname)
//           friend.lastname = req.body.lastname;
//         if(req.body.bday)
//           friend.bday = req.body.bday;
//         friend.save(function(err){
//           if(err){
//             console.log("Error encountered..");
//           }
//           else{
//             console.log("inside else.....delete method called");
//               Friend.find({}, function(err, friends){
//                 if(err){
//                   console.log('Errrrr......Something went wrong!!');
//                   res.json(err);
//                 }
//                 else{
//                   res.json(friends);
//                 }
//               })
//             }
//         })
//       }
//     })
//   },
//   delete: function(req,res){
//     Friend.remove({_id: req.params.id}, function(err){
//       if(err){
//         console.log("Error encountered.......!!!");
//       }
//       else{
//         Friend.find({}, function(err, friends){
//           if(err){
//             console.log('Errrrr......Something went wrong!!');
//             res.json(err);
//           }
//           else{
//             res.json(friends);
//           }
//         })
//       }
//     })
//   },
//
// }// end of module exports
