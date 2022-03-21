const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID
        username: String!
        friends: [User]!
    }

    type Query {
        me: User!
    }


`;

const resolvers = {
    Query: {
        me: () => ({
            id: '1',
            username: 'matt',
            friends: []
        })
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(
    ({ url }) => console.log(`🚀  Server ready at ${url}`) 
)