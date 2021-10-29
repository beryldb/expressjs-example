/* 
 * Provides examples for admin.
 * This route contains examples on flushall, flushdb, coremodules and modules.
 */
 
var beryldb  =  require('../../server/run/cache');
var express  = require('express');
var router   = express.Router();

router.post('/flushall', async function(req, res)
{
      beryldb.flushall().then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/flushdb', async function(req, res)
{
      beryldb.flushdb().then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/coremodules', async function(req, res)
{
      beryldb.coremodules().then(function(data) 
      {
            res.status(200).send({ result: Object.fromEntries(data) });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/modules', async function(req, res)
{
      beryldb.modules().then(function(data) 
      {
            res.status(200).send({ result: Object.fromEntries(data) });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/commands', async function(req, res)
{
      beryldb.commands().then(function(data) 
      {
            res.status(200).send({ result: Object.fromEntries(data) });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/pwd', async function(req, res)
{
      beryldb.pwd().then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/epoch', async function(req, res)
{
      beryldb.epoch().then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/time', async function(req, res)
{
      beryldb.time().then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/restart', async function(req, res)
{
      beryldb.restart().then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});

router.post('/shutdown', async function(req, res)
{
      beryldb.shutdown().then(function(data) 
      {
            res.status(200).send({ result: data });
      })
      .catch(function(error)
      {
            res.status(403).send({ codes: error });
      });
});


module.exports = router;
