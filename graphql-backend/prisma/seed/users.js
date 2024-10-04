const { PrismaClient } = require("@prisma/client")
const { faker } = require("@faker-js/faker")

const prisma = new PrismaClient()

async function main() {
  const users = []
  const amount = 10

  for (let i = 0; i < amount; i++) {
    users.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password_hash: faker.internet.password(),
      role: faker.helpers.arrayElement(["TUTOR"]),
      imageUrl: faker.image.avatar(),
      hourlyRate: parseFloat(
        faker.number.float({ min: 10, max: 100 }).toFixed(2)
      ),
      rating: parseFloat(faker.number.float({ min: 0, max: 5 }).toFixed(1)),
      skills: faker.helpers.arrayElements(
        ["JavaScript", "Python", "Java", "C#", "Ruby"],
        3
      ),
      isAvailable: true,
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
