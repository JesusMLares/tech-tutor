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
    user: async (_, { id }) => await prisma.user.findUnique({ where: { id } }),
    post: async (_, { id }) => await prisma.post.findUnique({ where: { id } }),
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
      const { firstName, lastName, email, password_hash, role } = input
      try {
        const hashedPassword = await bcrypt.hash(password_hash, 10)
        return await prisma.user.create({
          data: {
            firstName,
            lastName,
            email,
            password_hash: hashedPassword,
            role,
          },
        })
      } catch (error) {
        console.error(error)
        throw new Error(`Failed to create user`)
      }
    },
    createPost: async (_, { input }) => {
      try {
        const { title, content, published, authorId } = input
        return await prisma.post.create({
          data: {
            title,
            content,
            published,
            authorId,
          },
        })
      } catch (error) {
        console.error(error)
        throw new Error(`Failed to create post`)
      }
    },
    updateUser: async (_, { id, input }) => {
      try {
        const { firstName, lastName, email, role } = input
        return await prisma.user.update({
          where: { id },
          data: { firstName, lastName, email, role },
        })
      } catch (error) {
        console.error(error)
        throw new Error("Failed to update user")
      }
    },
    updatePost: async (_, { id, title, content, published }) => {
      return await prisma.post.update({
        where: { id },
        data: { title, content, published },
      })
    },
    deleteUser: async (_, { input }) => {
      const { id } = input
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
