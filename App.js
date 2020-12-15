const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// data source
const db = {};

// graphql schema
const schema = require('./schema');

// apollo server
const server = new ApolloServer({ schema, context: { db } });

// express app
const app = express();

// apollo server as a middleware
server.applyMiddleware({ app });

// start server
app.listen(3001, () => console.log('👻 Server Başlatıldı!'));