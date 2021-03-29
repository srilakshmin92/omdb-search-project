var express = require('express');
var router = express.Router();
var searchController = require('./controllers/searchController')

/* GET search result. */
router.get('/', function (req, res, next) {
  console.log(req.query.query)
  if (req.query.query) {
    var serachResult = searchController.getSearchResult(req.query.query)
    serachResult.then(function (result) {
      res.status(result.statusCode).json(result.message)
    });
  }
});

module.exports = router;
