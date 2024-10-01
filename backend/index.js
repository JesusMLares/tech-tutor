const { ApolloServer } = require("apollo-server")
const { readFileSync } = require("fs")
const { join } = require("path")
require("dotenv").config()

// Read the schema.graphql file
const typeDefs = readFileSync(
  join(__dirname, "graphql", "schema.graphql"),
  "utf8"
)
// Import the resolvers
const resolvers = require("./resolvers") // Import the resolvers

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers })

const port = process.env.PORT || 4000

// Start the server
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
