var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Radical = require('./Radical');

module.exports = router;

router.post('/', function (req, res) {

    Radical.create({
        radical: req.body.radical,
        strokes: req.body.strokes
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

router.get('/populate', function (req, res) {
    var fs = require('fs');
    var obj;
    fs.readFile(__dirname + '/radicals.json', 'utf8', function (err, data) {
        if (err) return res.status(500).send("There was a problem" + err);
        radicals = JSON.parse(data);
        console.log("Inserting Radicals...");
        for (var radical of Object.keys(radicals)) {
            // console.log("inserting: " + radical + ", strokes: " + radicals[radical].strokes);
            Radical.create({
                radical: radical,
                strokes: radicals[radical].strokes
            },
                function (err, radical) {
                    if (err) return res.status(500).send("There was a problem adding the information to the database.");
                });
        }
        console.log("...done");
        res.status(200).send("Database populated successfully");
    });
});

module.exports = router;