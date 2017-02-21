console.log('controller user working')

var mongoose = require('mongoose');
var User = mongoose.model("User");

function UserController() {
    this.login = function(req, res) {
        User.findOne({
          name: req.body.name,
          wins: req.body.wins,
          losses: req.body.losses
        },
        function(err, user) {
            if(err){
              console.log(err);
            }
            if(user) {
                console.log('user found and returned');
                return res.json(user);
            } else {
                console.log('create users', req.body);
                var user = new User(req.body);
                user.save(function(err) {
                    if(err) {
                        console.log('******** validation errors:', err);
                        return res.json(err);
                    }else{
                        return res.json(user);
                    }
                });
            }
        })
    };

    this.update = function(req,res) {
      console.log('updating score', req.params.id);
      User.findOne({_id:req.params.id}, function(err, user) {
        if(err) {
          console.log("something went wrong");
        } else {
          user.wins = req.body.wins;
          user.losses = req.body.losses;
          user.save(function(err) {
            if(err) {
              console.log("something went wrong");
            } else {
              res.json(user);
            }
          });
        }
      })

    };

}

module.exports = new UserController();
