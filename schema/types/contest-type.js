const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} = require('graphql');

module.exports = new GraphQLObjectType ({
  name: 'ContestType',
  fields: {
    id: {type: GraphQLID},
    code: {type: GraphQLString},
    title: {type: GraphQLString},
    description: {type: GraphQLString}
  }
});