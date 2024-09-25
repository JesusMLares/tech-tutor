const { ApolloServer } = require("apollo-server")
const { makeExecutableSchema } = require("@graphql-tools/schema")
const { readFileSync } = require("fs")
const { join } = require("path")
const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
require("dotenv").config()

const prisma = new PrismaClient()

// Define GraphQL schema
const typeDefs = readFileSync(
  join(__dirname, "graphql", "schema.graphql"),
  "utf8"
)

// Define resolvers
const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany(),
    posts: async () => await prisma.post.findMany(),
  },
  User: {
    posts: async (parent) =>
      await prisma.post.findMany({ where: { authorId: parent.id } }),
  },
  Post: {
    author: async (parent) =>
      await prisma.user.findUnique({ where: { id: parent.authorId } }),
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const { firstName, lastName, email, password_hash, role } = input;
      try {
        const hashedPassword = await bcrypt.hash(password_hash, 10);
        return await prisma.user.create({
          data: {
            firstName,
            lastName,
            email,
            password_hash: hashedPassword,
            role,
          },
        });
      } catch (error) {
        if (error.code === 'P2002' && error.meta.target.includes('email')) {
          throw new Error(`A user with the email ${email} already exists.`);
        }
        throw error;
      }
    },
    createPost: async (_, { title, content, published, authorId }) => {
      return await prisma.post.create({
        data: {
          title,
          content,
          published,
          authorId,
        },
      })
    },
    updateUser: async (
      _,
      { id, firstName, lastName, email, password_hash, role }
    ) => {
      const data = { firstName, lastName, email, role }
      if (password_hash) {
        data.password_hash = await bcrypt.hash(password_hash, 10)
      }
      return await prisma.user.update({
        where: { id },
        data,
      })
    },
    updatePost: async (_, { id, title, content, published }) => {
      return await prisma.post.update({
        where: { id },
        data: { title, content, published },
      })
    },
    deleteUser: async (_, { id }) => {
      return await prisma.user.delete({
        where: { id },
      })
    },
    deletePost: async (_, { id }) => {
      return await prisma.post.delete({
        where: { id },
      })
    },
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers })

const port = process.env.PORT || 4000

// Start the server
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
