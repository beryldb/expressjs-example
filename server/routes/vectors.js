/* 
 * Provides examples for vectors.
 * This route contains examples on vpush, vpushnx, vget, vpos and vresize.
 */

var beryldb  =  require('../../server/run/cache');
var express  = require('express');
var router   = express.Router();

router.post('/vpush', async function(req, res)
{
      beryldb.vpush(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/vget', async function(req, res)
{
      beryldb.vget(req.body.key).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/vpos', async function(req, res)
{
      beryldb.vpos(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/vresize', async function(req, res)
{
      beryldb.vresize(req.body.key, req.body.value).then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

module.exports = router;
