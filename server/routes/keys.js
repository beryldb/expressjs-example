/* 
 * Provides examples for keys.
 * This route contains examples on set, get, strlen, incr, and setnx.
 */

var beryldb  =  require('../../server/run/cache');
var express  = require('express');
var router   = express.Router();

router.post('/set', async function(req, res)
{
      beryldb.set(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/get', async function(req, res)
{
      beryldb.get(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/strlen', async function(req, res)
{
      beryldb.strlen(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/incr', async function(req, res)
{
      beryldb.incr(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});


router.post('/setnx', async function(req, res)
{
      beryldb.setnx(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

module.exports = router;
