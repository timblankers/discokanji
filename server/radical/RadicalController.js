var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Radical = require('./Radical');

module.exports = router;

router.post('/', function (req, res) {

    Radical.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, radical) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(radical);
        });
});

router.get('/', function (req, res) {

    Radical.find({}, function (err, radicals) {
        if (err) return res.status(500).send("There was a problem finding the radicals.");
        res.status(200).send(radicals);
    });
});

module.exports = router;