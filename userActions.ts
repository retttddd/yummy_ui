"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { customers } from "~/server/db/schema";
import { eq } from "drizzle-orm";

/**
 * User actions for managing customer data
 */

/**
 * Add a new user to the database
 * @param phone - The user's phone number (string format)
 * @returns Object with success status and message or error
 */
export const addUser = async (phone: string) => {
  try {
    // Validate phone number format (simple validation for 9-digit number)
    if (!/^\d{9}$/.test(phone)) {
      return {
        success: false,
        error: "Invalid phone number format. Please provide a 9-digit number."
      };
    }

    // Check if user with this phone already exists
    const existingUser = await db.select()
      .from(customers)
      .where(eq(customers.phone, phone))
      .limit(1);

    if (existingUser.length > 0) {
      return {
        success: false,
        error: "A user with this phone number already exists."
      };
    }

    // Insert the new user
    await db.insert(customers).values({
      phone,
    });

    revalidatePath("/");

    return {
      success: true,
      message: "User added successfully."
    };
  } catch (error) {
    console.error("Error adding user:", error);
    return {
      success: false,
      error: "Failed to add user. Please try again later."
    };
  }
};

/**
 * Get a user by phone number
 * @param phone - The user's phone number
 * @returns User data if found, or null
 */
export const getUser = async (phone: string) => {
  try {
    const user = await db.select()
      .from(customers)
      .where(eq(customers.phone, phone))
      .limit(1);

    return {
      success: true,
      data: user.length > 0 ? user[0] : null
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return {
      success: false,
      error: "Failed to fetch user data."
    };
  }
};

/**
 * Delete a user by phone number
 * @param phone - The user's phone number
 * @returns Object with success status and message or error
 */
export const deleteUser = async (phone: string) => {
  try {
    await db.delete(customers)
      .where(eq(customers.phone, phone));

    revalidatePath("/");

    return {
      success: true,
      message: "User deleted successfully."
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      success: false,
      error: "Failed to delete user."
    };
  }
};
