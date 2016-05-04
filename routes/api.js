var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.use('/trees', require('./trees') );
router.use('/flashcards', require('./flashcards') );

module.exports = router;
