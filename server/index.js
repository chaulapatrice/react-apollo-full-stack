require('dotenv').config();
const { ApolloServer } = require('apollo-server-lambda');
const { typeDefs } = require('./schema');
const SwapidevAPI = require("./datasources/swapidev");
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        swapidevAPI: new SwapidevAPI()
    })
});

exports.graphqlHandler = server.createHandler();