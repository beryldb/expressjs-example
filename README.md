<p align="center">
  <img src="https://static.beryl.dev/smaller.png">
</p>

# Expressjs-example a Express.js example using BerylDB's Node.js driver.

[![Mailing List](https://img.shields.io/badge/email-google%20groups-4285F4 "beryldb@googlegroups.com")](https://groups.google.com/g/beryldb)
[![Twitter](https://img.shields.io/twitter/follow/beryldb?color=%23179CF0&logo=twitter&style=flat-square "@beryldb on Twitter")](https://twitter.com/beryldb)
[![Discord Server](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/23f6w9sgAd)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
<br>


If you want to learn more about BerylDB and how to install it, feel free to check our
documentation at [docs.beryl.dev](https://docs.beryl.dev/).<br>
Follow us on [Twitter](https://twitter.com/beryldb).

## QuickStart

The quick start guide will show you how to set up a simple [Express.js](https://github.com/expressjs/express) using
BerylDB's Node.js driver.

It scope is only how to set up express, dependencies and perform the simple operations.

## Installation

```bash
$ git clone https://github.com/beryldb/expressjs-example.git
```

and then install dependencies:

```bash
$ cd expressjs-example/
$ npm install
```

## Running

You can run this API by running start:

```bash
$ ./start
Express server listening on port 3000
Connected to BerylDB server: 127.0.0.1:6378
```

## Query using curl

Let's run a basic [SET](https://docs.beryl.dev/commands/set.html):

```bash
$ curl  -X POST -H 'Content-Type: application/json' -d '{"key": "hello", "value": "world"}' http://localhost:3000/tests/keys/set
```

Should return:

```bash
{"result":"OK"}
```

## Documentation

If you would like to learn more about this example, feel free to check our
[express.js official guide](https://docs.beryl.dev/drivers/node/express.html).
