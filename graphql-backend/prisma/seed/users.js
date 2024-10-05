const { PrismaClient } = require("@prisma/client")
const { faker } = require("@faker-js/faker")

const prisma = new PrismaClient()

async function fetchAvatar(gender) {
  const response = await fetch(`https://xsgames.co/randomusers/avatar.php?g=${gender}`);
  return response.url;
}

async function main() {
  const users = [];
  const amount = 10;

  for (let i = 0; i < amount; i++) {
    const gender = faker.helpers.arrayElement(['male', 'female']);
    const imageUrl = await fetchAvatar(gender); // Await the fetchAvatar function

    users.push({
      firstName: faker.person.firstName({ gender }),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password_hash: faker.internet.password(),
      role: faker.helpers.arrayElement(["TUTOR"]),
      imageUrl, // Use the fetched image URL
      hourlyRate: parseFloat(
        faker.number.float({ min: 10, max: 100 }).toFixed(2)
      ),
      rating: parseFloat(faker.number.float({ min: 0, max: 4.9 }).toFixed(1)),
      skills: faker.helpers.arrayElements(
        ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js',
        'Python', 'Django', 'Flask', 'SQL', 'MongoDB',
        'PostgreSQL', 'Express.js', 'Angular', 'Vue.js',
        'TypeScript', 'PHP', 'Ruby on Rails', 'Java',
        'Kotlin', 'Swift', 'C++', 'C#', 'Go (Golang)',
        'GraphQL', 'RESTful APIs', 'Sass (SCSS)',
        'jQuery', 'Git/GitHub', 'Docker', 'AWS (Amazon Web Services)'],
        3
      ),
      isAvailable: true,
    });
    console.log(users[i]);
  }

  await prisma.user.createMany({
    data: users,
  });

  console.log(`${amount} users created`);
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
