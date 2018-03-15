const express = require('express');
const router = express.Router();
const {requireLogin, requireLoggedout} = require('../auth');
const debug = require('debug')('app:index-routes');

const Sample = require('../models/Sample');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('This the index route!');
});

router.get('/sample', requireLogin, async (req, res) => {
  const sample = await Sample.find({})
    .catch(err => {
      debug(err);
      res.send({});
    });
  res.send(sample);
});

router.post('/sample', (req, res) => {
  const { title, author, text } = req.body;
  const sample = new Sample({
    title,
    author,
    text
  })
  .save()
  .catch( err => {
    debug(err);
  });
});

module.exports = router;