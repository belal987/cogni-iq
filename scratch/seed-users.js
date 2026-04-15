const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

async function seed() {
  if (!process.env.DATABASE_URL) {
    console.error("Database URL is missing!");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to database...");

    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ["user", "admin"], default: "user" },
      testsTaken: { type: Number, default: 0 },
      averageScore: { type: Number, default: 0 },
      bestScore: { type: Number, default: 0 },
    });
    
    const User = mongoose.models.User || mongoose.model("User", userSchema);

    // 1. Create Admin Account
    const adminEmail = "admin@activate.com";
    const adminPass = "Adminpass123";
    let admin = await User.findOne({ email: adminEmail });
    
    if (!admin) {
      await User.create({
        name: "Admin Manager",
        email: adminEmail,
        password: await bcrypt.hash(adminPass, 10),
        role: "admin"
      });
      console.log(`✅ Admin Account Created`);
    } else {
      console.log(`ℹ️ Admin Account already exists`);
    }

    // 2. Create Normal User Account
    const userEmail = "user@activate.com";
    const userPass = "Userpass123";
    let user = await User.findOne({ email: userEmail });

    if (!user) {
      await User.create({
        name: "Regular User",
        email: userEmail,
        password: await bcrypt.hash(userPass, 10),
        role: "user"
      });
      console.log(`✅ Normal User Account Created`);
    } else {
      console.log(`ℹ️ Normal User Account already exists`);
    }

    console.log("\n--- TEST CREDENTIALS ---");
    console.log("Admin Email:", adminEmail);
    console.log("Admin Password:", adminPass);
    console.log("-----------------------");
    console.log("User Email:", userEmail);
    console.log("User Password:", userPass);
    console.log("-----------------------\n");

    await mongoose.disconnect();
    process.exit(0);

  } catch (error) {
    console.error("Error seeding tests users:", error);
    process.exit(1);
  }
}

seed();
