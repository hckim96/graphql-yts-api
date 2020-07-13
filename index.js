import { GraphQLServer } from 'graphql-yoga';
// const graphqlYoga = require("graphql-yoga");
import resolvers from './graphql/resolvers';
const server = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers: resolvers,
    opts: {
        port: process.env.PORT || '4000',
        endpoint: 'graphql',
    },
});
server.start(
    {
        port: 4000,
        endpoint: '/graphql',
        playground: '/playground',
    },
    ({ port }) => {
        console.log('graphql server started', port);
    }
);
