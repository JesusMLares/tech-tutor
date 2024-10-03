const { PrismaClient } = require("@prisma/client")
const { faker } = require("@faker-js/faker")

const prisma = new PrismaClient()

async function main() {
  const users = []
  const amount = 10

  for (let i = 0; i < amount ; i++) {
    users.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password_hash: faker.internet.password(),
      role: faker.helpers.arrayElement(["USER", "TUTOR"]),
      imageUrl: faker.image.avatar(),
      hourlyRate: faker.number.float({ min: 10, max: 100 }),
      rating: faker.number.float({ min: 1, max: 5 }),
      skills: faker.helpers.arrayElements(
        ["JavaScript", "Python", "Java", "C#", "Ruby"],
        3
      ),
      isAvailable: faker.datatype.boolean(),
    })
  }

  await prisma.user.createMany({
    data: users,
  })

  console.log(`${amount} users created`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
