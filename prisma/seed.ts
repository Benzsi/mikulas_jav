import { PrismaClient } from "../generated/prisma/client";
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    const jatekIds: number[] = [];
    const gyerekIds: number[] = [];

  for (let i = 0; i < 10; i++) {
    const jatek = await tx.jatek.create({
        data: {
          megnevezes: faker.commerce.productName(),
          anyag: faker.helpers.arrayElement(["wood", "metal","plastic","other"]),
          suly: faker.number.int({ min: 1, max: 5 }),
    },
    });
    jatekIds.push(jatek.id);
  }

  for (let i = 0; i < 10; i++) {
    const gyerek = await tx.gyerek.create({
      data: {
        nev: faker.person.fullName(),
        cim: faker.location.streetAddress(),
        jorossz: faker.datatype.boolean(),
      },
    });
    gyerekIds.push(gyerek.id);
  }

  for (const gyerekId of gyerekIds) {
    const selectedJatekIds = faker.helpers.arrayElements(jatekIds, { min: 1, max: 3 });
    for (const jatekId of selectedJatekIds) {
      await tx.gyerekJatekok.create({
        data: {
          gyerekId,
          jatekId,
        },
      });
    }
  }
});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });