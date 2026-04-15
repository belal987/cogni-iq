const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.DATABASE_URL;

async function testConnection() {
  if (!MONGODB_URI) {
    console.error("❌ DATABASE_URL is missing in .env.local");
    return;
  }

  console.log("Connecting to:", MONGODB_URI.split('@')[1] || MONGODB_URI); // Log part of it for safety

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Mongoose Connected successfully!");
    
    // Try to list collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections in DB:", collections.map(c => c.name));
    
    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Connection failed!");
    console.error(error);
  }
}

testConnection();
