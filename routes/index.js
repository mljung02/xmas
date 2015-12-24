var express = require('express');
var router = express.Router();

function match(answer, guess) {
  var guessArray = guess.split(' ')
  var answerArray = answer.split(' ')
  var out
  guessArray.forEach(function (guessy) {
    answerArray.forEach(function (answery) {
      if (guessy.toLowerCase() === answery.toLowerCase()) {
        out = true;
        }
    })
  })
  return out
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/liz', function(req, res, next) {
  res.render('liz', { title: 'Express' });
});

router.get('/liz2', function(req, res, next) {
  res.render('liz2', { title: 'Express' });
});

router.post('/liz', function (req, res, next) {
  if (match('snowball', req.body.guess)) {
    res.redirect('/liz2')
  } else {
    res.render('liz', {error: "Nope, try again!"})
  }
})

router.post('/liz2', function (req, res, next) {
  if (match('pc computer desktop', req.body.guess)) {
    res.redirect('/lizwins')
  } else {
    res.render('liz2', {error: "Nope, try again!"})
  }
})

router.get('/lizwins', function (req, res, next) {
  res.render('lizwins')
})

router.get('/jonas', function (req, res, next) {
  res.render('jonas')
})

router.post('/jonas', function (req, res, next) {
  if (match('crispmas', req.body.guess)) {
    res.redirect('/jonaswins')
  } else {
    res.render('jonas', {error: "Nope, try again!"})
  }
})

router.get('/jonaswins', function (req, res, next) {
  res.render('jonaswins')
})

router.get('/beth', function (req, res, next) {
  res.render('beth')
})

router.post('/beth', function (req, res, next) {
  if (match('bleatings bleating', req.body.guess)) {
    res.redirect('/bethwins')
  } else {
    res.render('beth', {error: "Nope, try again!"})
  }
})

router.get('/bethwins', function (req, res, next) {
  res.render('bethwins')
})

router.get('/mom', function (req, res, next) {
  res.render('mom')
})

router.post('/mom', function (req, res, next) {
  if (match('sth', req.body.guess)) {
    res.redirect('/momwins')
  } else {
    res.render('mom', {error: "Nope, try again!"})
  }
})

router.get('/momwins', function (req, res, next) {
  res.render('momwins')
})

module.exports = router;
