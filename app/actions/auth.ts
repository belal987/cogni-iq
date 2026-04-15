"use server";

import { z } from "zod";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { SignupFormSchema, LoginFormSchema, FormState } from "@/lib/auth-definitions";

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  // 1. Establish DB connection
  await connectDB();

  // 2. Validate form fields
  const validatedFields = SignupFormSchema.safeParse(Object.fromEntries(formData));

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  // 3. Hash the user's password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. Database Operations
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return {
        errors: {
          email: ["A user with this email already exists."],
        },
      };
    }

    // Insert the user into the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Create user session
    await createSession(user._id.toString(), user.role);
  } catch (error: any) {
    console.error("❌ Signup Error Detail:", error?.message || error);
    return {
      message: "Database connection failed. Please ensure your IP is whitelisted in MongoDB Atlas.",
    };
  }

  // 7. Redirect user
  redirect("/dashboard");
}

export async function login(state: FormState, formData: FormData): Promise<FormState> {
  // 1. Establish DB connection
  await connectDB();

  // 2. Validate form fields
  const validatedFields = LoginFormSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // 3. Find the user
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return {
        message: "Invalid email or password.",
      };
    }

    // 4. Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return {
        message: "Invalid email or password.",
      };
    }

    // 5. Create user session
    await createSession(user._id.toString(), user.role);
  } catch (error: any) {
    console.error("❌ Login Error Detail:", error?.message || error);
    return {
      message: "Database connection failed during login.",
    };
  }

  // 6. Redirect user
  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
