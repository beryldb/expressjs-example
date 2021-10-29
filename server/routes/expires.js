/* 
 * Provides examples for expires.
 * This route contains examples on expire, expires, persist, ttl and ttlat.
 */

var beryldb  =  require('../../server/run/cache');
var express  = require('express');
var router   = express.Router();

router.post('/expire', async function(req, res)
{
      beryldb.expire(req.body.key, req.body.seconds).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/expires', async function(req, res)
{
      beryldb.expires(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            console.log(error);
            res.status(403).send({ codes: error });
      });
});

router.post('/persist', async function(req, res)
{
      beryldb.persist(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/ttl', async function(req, res)
{
      beryldb.ttl(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/ttlat', async function(req, res)
{
      beryldb.ttlat(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

module.exports = router;
