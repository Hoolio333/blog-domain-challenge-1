const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alicemarti", email: "alicemartin@gmail.com" },
      { username: "billshill", email: "billshill@gmail.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  const createdProfile = await prisma.profile.createMany({
    data: [
      {
        profilePic: "https://i.gyazo.com/a25f1b0d00eabea1e20234f31a5049a8.png",
        biography: "I'm the greatest profile ever!",
      },
      {
        profilePic: "https://i.gyazo.com/4010cbe3c6cd7f47fb050d9364057ab0.png",
        biography: "I'm the second greatest profile ever!",
      },
    ],
  });

  const createdPost = await prisma.post.createMany({
    data: [
      {
        title: "I did it My Way",
        content: "Frank S would be proud...",
      },
      {
        title: "Why did the chicken...",
        content: "Cross the road?",
      },
    ],
  });

  // Add your code here

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
