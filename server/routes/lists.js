/* 
 * Provides examples for lists.
 * This route contains examples on lpush, lpushnx, lget, lpos and lresize.
 */

var beryldb  =  require('../../server/run/cache');
var express  = require('express');
var router   = express.Router();

router.post('/lpush', async function(req, res)
{
      beryldb.lpush(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/lpushnx', async function(req, res)
{
      beryldb.lpushnx(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/lget', async function(req, res)
{
      beryldb.lget(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/lpos', async function(req, res)
{
      beryldb.lpos(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/lresize', async function(req, res)
{
      beryldb.lresize(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

module.exports = router;
