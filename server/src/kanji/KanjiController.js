var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Kanji = require('./Kanji');

module.exports = router;

router.post('/', function (req, res) {

    Kanji.create({
        kanji: req.body.kanji,
        radicals: req.body.radicals
    },
        function (err, kanji) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(kanji);
        });
});

router.get('/', function (req, res) {

    Kanji.find({}, function (err, allKanji) {
        if (err) return res.status(500).send("There was a problem finding the allKanji.");
        res.status(200).send(allKanji);
    });
});

router.get('/populate', function (req, res) {
    var fs = require('fs');
    fs.readFile(__dirname + '/kanji.json', 'utf8', function (err, data) {
        if (err) return res.status(500).send("There was a problem" + err);
        allKanji = JSON.parse(data);
        for (var kanji of Object.keys(allKanji)) {
            console.log("inserting: " + kanji + ", radicals: " + allKanji[kanji].radicals);
            Kanji.create({
                kanji: kanji,
                radicals: allKanji[kanji].radicals
            },
                function (err, kanji) {
                    if (err) return res.status(500).send("There was a problem adding the information to the database.");
                });
        }
        res.status(200).send("Database populated with kanji successfully");
    });
});

module.exports = router;