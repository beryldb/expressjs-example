/* 
 * Provides examples for maps.
 * This route contains examples on hset, hsetnx, hcount, hexists,
 * hlist and hget.
 */
 
var beryldb  =  require('../../server/run/cache');
var express = require('express');
var router  = express.Router();

router.post('/hset', async function(req, res)
{
      beryldb.hset(req.body.key, req.body.hash, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/hsetnx', async function(req, res)
{
      beryldb.hsetnx(req.body.key, req.body.hash, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/hcount', async function(req, res)
{
      beryldb.hcount(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/hexists', async function(req, res)
{
      beryldb.hexists(req.body.key, req.body.hash).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/hlist', async function(req, res)
{
      beryldb.hlist(req.body.key, req.body.offset, req.body.limit).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/hget', async function(req, res)
{
      beryldb.hget(req.body.key, req.body.hash).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});


module.exports = router;
