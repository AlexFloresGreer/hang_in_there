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
                return res.json(user);
            } else {
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
      User.findOne({_id:req.params.id}, function(err, user) {
        if(err) {
          console.log("ERROR cannot find user");
        } else {
          user.wins = req.body.wins;
          user.losses = req.body.losses;
          user.save(function(err) {
            if(err) {
              console.log("ERROR cannot save user to database");
            } else {
              res.json(user);
            }
          });
        }
      })

    };

    this.display = function(req,res) {
      User.find({}, function(err, users) {
        if(err) {
          console.log('ERROR cannot reach users in database');
        } else {
          res.json(users)
        }
      })
    }

}

module.exports = new UserController();
