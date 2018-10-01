const User = require('../models/User');

function UserResource(router) {
    router.get('/users', function(req, res) {
        User.find({})
        .then(function(data) {
            res.json(data);
        }).catch(function(err) {
            throw err;
        });
    });
    router.get('/user:id', function(req, res) {
        User.findOne({_id:req.params.id}, function(err, data) {
            if(err) throw err;
            res.json(data);
        });
    });
    router.post('/user', function(req, res) {
        var user = new User({
            text: req.body.text
        });

        user.save(function(err, data) {
            if(err) throw err;
            res.json(data);
        });
    });
    router.put('/user:id', function(req, res) {
        User.findOneAndUpdate({_id:req.params.id},
            {text: req.body.text}, function(err, data) {
                if(err) throw err;
                res.json(data);
            });
    });
    router.delete('/user:id', function(req, res) {
        User.findOneAndRemove({_id:req.params.id}, function(err, data) {
            if(err) throw err;
            res.json(data);
        });
    });
};

module.exports = UserResource;