# GraphQL Server App

### Overview
This app is a very basic GraphQL server app. It allows to query and mutate
Contest entities
 - Query all Contests using 'contests'
 - Query Contest based on id using 'contest(id: '1')'
 - Updated existing Contest using 'mutation AddNewContest($input: ContestInputType!)'

## Getting Started

In the project directory, you can run:

`npm install`

This would download all the dependencies required by project

`npm start`

Starts the Express server on localhost:4000. Graphiql interface can be accessed using the 
following url 'http://localhost:4000/graphql'
