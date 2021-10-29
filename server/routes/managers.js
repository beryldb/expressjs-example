/* 
 * Provides examples for managers.
 * This route contains examples on del, copy, rename, and renamenx.
 */

var beryldb  =  require('../../server/run/cache');
var express  = require('express');
var router   = express.Router();

router.post('/del', async function(req, res)
{
      beryldb.del(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/copy', async function(req, res)
{
      beryldb.copy(req.body.key, req.body.dest).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/rename', async function(req, res)
{
      beryldb.rename(req.body.key, req.body.dest).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/renamenx', async function(req, res)
{
      beryldb.renamenx(req.body.key, req.body.dest).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

module.exports = router;
