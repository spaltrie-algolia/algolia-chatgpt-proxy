var express = require('express');
var router = express.Router();

var algoliasearch = require('algoliasearch');
var dotenv = require('dotenv');

dotenv.config();


/* GET home page. */
router.post('/', async function (req, res, next) {

   const ALGOLIA_APP_ID = req.body.AppId;
   const ALGOLIA_API_KEY = req.body.ApiKey;
   const ALGOLIA_INDEX_NAME = req.body.IndexName;
   const query = req.body.query || '';
   const queryParams = req.body.queryParams || {};

   const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
   const index = client.initIndex(ALGOLIA_INDEX_NAME);

   const result = await index.search(query, queryParams)
   res.status(200);
   res.json(result);
   //next();
});

module.exports = router;
