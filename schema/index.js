const { addResolversToSchema } = require('@graphql-tools/schema');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { loadSchemaSync } = require('@graphql-tools/load');

const resolvers = {
    ...require('./query'),      // Query resolvers
    ...require('./mutation')    // Mutation resolvers
};

// load schema from *.graphql files
const schema = loadSchemaSync('./schema/**/*.graphql', {
    loaders: [new GraphQLFileLoader()]
});

module.exports = addResolversToSchema({ schema, resolvers });