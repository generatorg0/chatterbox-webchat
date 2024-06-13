import Email from "next-auth/providers/email";
import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Enter correct email" }),
  password: z.string().min(8, { message: "Min 8 characters" }),
});
