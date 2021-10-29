const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');

let env = dotenv.config({path: '.protocols'})

if (env.error) 
{
      throw env.error;
}

protocol = dotenvParseVariables(env.parsed);

module.exports = protocol;
