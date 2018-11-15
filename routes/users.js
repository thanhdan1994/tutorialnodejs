var express = require('express');
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/update/:id', function(req, res, next) {
  if (req.params.id === '0') next('route')
  else next()
}, function(req, res, next) {
  res.render('regular')
});

router.get('/create', function(req, res, next) {
  res.render('users/create', {user : {info: {name:'Tran Thanh Dan',age:'16',adress:'496 Duong Quang Ham P6 Go Vap'},password: 'thanhdanpc'}});
});

module.exports = router;
