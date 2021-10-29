/* 
 * Provides examples for databases.
 * This route contains examples on dbcreate, dbdelete and dblist.
 */

var beryldb  =  require('../../server/run/cache');
var express  = require('express');
var router   = express.Router();

router.post('/dbcreate', async function(req, res)
{
      beryldb.dbcreate(req.body.name, req.body.path).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/dbdelete', async function(req, res)
{
      beryldb.dbdelete(req.body.name).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/dblist', async function(req, res)
{
      beryldb.dblist().then(function(data) 
      {
            res.status(200).send({ result: Object.fromEntries(data) });
      })
      .catch(function(error)
      {
      console.log(error);
            res.status(403).send({ codes: error });
      });
});



module.exports = router;
