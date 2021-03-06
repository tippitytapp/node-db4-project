const express = require('express');
const helmet = require('helmet');
const RecipesRouter = require('../recipes/recipes-router.js');
const server = express();
server.use(helmet());
server.use(express.json())
server.use('/api', RecipesRouter)



module.exports = server;