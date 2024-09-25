const resolvers = {
  Query: {
    // Fetch all users
    users: async () => {
      try {
        return await prisma.user.findMany()
      } catch (error) {
        throw new Error("Error fetching users")
      }
    },
    // Fetch a single user by id
    user: async (_, { id }) => {
      try {
        return await prisma.user.findUnique({ where: { id } })
      } catch (error) {
        throw new Error("Error fetching user")
      }
    },
    // Fetch all posts
    posts: async () => {
      try {
        return await prisma.post.findMany()
      } catch (error) {
        throw new Error("Error fetching posts")
      }
    },
    // Fetch a single post by id
    post: async (_, { id }) => {
      try {
        return await prisma.post.findUnique({ where: { id } })
      } catch (error) {
        throw new Error("Error fetching post")
      }
    },
    // Fetch all appointments
    appointments: async () => {
      try {
        return await prisma.appointment.findMany()
      } catch (error) {
        throw new Error("Error fetching appointments")
      }
    },
    // Fetch a single appointment by id
    appointment: async (_, { id }) => {
      try {
        return await prisma.appointment.findUnique({ where: { id } })
      } catch (error) {
        throw new Error("Error fetching appointment")
      }
    },
  },
  // Define relationships between types
  User: {
    // Fetch all posts by a user
    posts: async (parent) => {
      try {
        return await prisma.post.findMany({ where: { authorId: parent.id } })
      } catch (error) {
        throw new Error("Error fetching user posts")
      }
    },
    // Fetch all appointments by a user
    appointments: async (parent) => {
      try {
        return await prisma.appointment.findMany({
          where: { userId: parent.id },
        })
      } catch (error) {
        throw new Error("Error fetching user appointments")
      }
    },
    // Fetch all user skills
    skills: async (parent) => {
      try {
        return await prisma.userSkills.findMany({
          where: { userId: parent.id },
        })
      } catch (error) {
        throw new Error("Error fetching user skills")
      }
    },
  },
  Post: {
    // Fetch the author of a post
    author: async (parent) => {
      try {
        return await prisma.user.findUnique({ where: { id: parent.authorId } })
      } catch (error) {
        throw new Error("Error fetching post author")
      }
    },
    // Fetch all appointments for a post
    appointments: async (parent) => {
      try {
        return await prisma.appointment.findMany({
          where: { postId: parent.id },
        })
      } catch (error) {
        throw new Error("Error fetching post appointments")
      }
    },
  },
  Appointment: {
    // Fetch the user of an appointment
    user: async (parent) => {
      try {
        return await prisma.user.findUnique({ where: { id: parent.userId } })
      } catch (error) {
        throw new Error("Error fetching appointment user")
      }
    },
    // Fetch the post of an appointment
    post: async (parent) => {
      try {
        return await prisma.post.findUnique({ where: { id: parent.postId } })
      } catch (error) {
        throw new Error("Error fetching appointment post")
      }
    },
    // Fetch the tutor of an appointment
    tutor: async (parent) => {
      try {
        return await prisma.user.findUnique({ where: { id: parent.tutorId } })
      } catch (error) {
        throw new Error("Error fetching appointment tutor")
      }
    },
  },
  // Define mutations: create, update, delete
  Mutation: {
    // Create a new user
    createUser: async (_, { data }) => {
      try {
        return await prisma.user.create({
          data: {
            username: data.username,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            role: "USER",
          },
        });
      } catch (error) {
        console.error('Error creating user:', error); // Log the error details
        if (error.code === "P2002" && error.meta.target.includes("email")) {
          throw new Error(`A user with the email ${data.email} already exists.`);
        }
        throw new Error("Error creating user");
      }
    },
    // Create a new tutor
    createTutor: async (_, { data }) => {
      try {
        return await prisma.user.create({
          data: {
            ...data,
            role: "TUTOR",
          },
        })
      } catch (error) {
        if (error.code === "P2002" && error.meta.target.includes("email")) {
          throw new Error(
            `A tutor with the email ${data.email} already exists.`
          )
        }
        throw new Error("Error creating tutor")
      }
    },
    // Create a new post
    createPost: async (_, { data }) => {
      try {
        return await prisma.post.create({
          data,
        })
      } catch (error) {
        throw new Error("Error creating post")
      }
    },
    // Update a post
    updatePost: async (_, { id, data }) => {
      try {
        return await prisma.post.update({
          where: { id },
          data,
        })
      } catch (error) {
        throw new Error("Error updating post")
      }
    },
    // Delete a post
    deletePost: async (_, { id }) => {
      try {
        return await prisma.post.delete({
          where: { id },
        })
      } catch (error) {
        throw new Error("Error deleting post")
      }
    },
    // Create a new appointment
    createAppointment: async (_, { data }) => {
      try {
        return await prisma.appointment.create({
          data,
        })
      } catch (error) {
        throw new Error("Error creating appointment")
      }
    },
    // delete an appointment
    deleteAppointment: async (_, { id }) => {
      try {
        return await prisma.appointment.delete({
          where: { id },
        })
      } catch (error) {
        throw new Error("Error deleting appointment")
      }
    },
    // Add a skill to a tutor
    addSkillToTutor: async (_, { userId, skill }) => {
      try {
        const user = await prisma.user.findUnique({ where: { id: userId } })
        if (user.role !== "TUTOR") {
          throw new Error("Only tutors can add skills")
        }
        return await prisma.userSkills.create({
          data: {
            userId,
            skill,
          },
        })
      } catch (error) {
        throw new Error("Error adding skill to tutor")
      }
    },
  },
}

module.exports = resolvers