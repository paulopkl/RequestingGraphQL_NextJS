const { ApolloServer, gql } = require('apollo-server');

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

const typeDefs = gql`
    type Books {
        title: String
        author: String
    }
    
    input Book {
        title: String
        author: String
    }

    type Query {
        books: [Books]
    }

    type Mutation {
        addBook(data: Book): [Books]
    }
`;

const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation: {
        addBook: (_, { data }) => {
            console.log(data);

            return books;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3333).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});