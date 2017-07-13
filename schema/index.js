const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');

const ContestType = require('./types/contest-type');
const contestStore = require('../store/contest-store');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    contest: {
      type: ContestType,
      description: 'Contest Type',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (obj, args) => {
        return contestStore.getContest(args.id);
      }
    },
    contests: {
      type: new GraphQLList(ContestType),
      description: 'List of all the contests',
      resolve: () => {
        return contestStore.getContests();
      }
    }
  }
});

const AddContestMutation = require('./mutations/add-contests');
const RootMutationType = new GraphQLObjectType ({
  name: 'RootMutationType',
  fields: () => ({
    addContest: AddContestMutation
  })
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

module.exports = ncSchema;