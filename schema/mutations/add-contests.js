const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const contestStore = require('../../store/contest-store');
const ContestType = require ('../types/contest-type');
const ContestInputType = new GraphQLInputObjectType({
  name: 'ContestInputType',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLString)},
    code: {type: GraphQLString},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
  }
});

module.exports = {
  type: ContestType,
  args: {
    input: {type: new GraphQLNonNull(ContestInputType)}
  },
  resolve(obj, { input }) {
    return contestStore.addContest(input);
  }
};