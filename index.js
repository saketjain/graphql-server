const { nodeEnv } = require('./lib/util');
console.log(`Running in ${nodeEnv} mode...`);

const app = require('express')();
const ncSchema = require('./schema');
const graphqlHTTP = require('express-graphql');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/graphql', graphqlHTTP({
  schema: ncSchema,
  graphiql: true
}));

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

