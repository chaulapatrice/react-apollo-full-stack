const { ApolloServer } = require('apollo-server');
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

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});