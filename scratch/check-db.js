const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Checking database connection...");
    await prisma.$connect();
    console.log("✅ Database connection successful!");
    
    const userCount = await prisma.user.count();
    console.log(`Current users in DB: ${userCount}`);
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error(error.message || error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
