"use server";
import { supabaseDb } from "./db";
import { SignupFormSchema, LoginSchema } from "@lib/schema";

/* User related table functions */
export async function createUser(formData: FormData) {
  const userDataValidation = SignupFormSchema.safeParse({
    username: formData.get("userName"),
    password: formData.get("password"),
    firstname: formData.get("firstName"),
    lastname: formData.get("lastName"),
  });

  if (!userDataValidation.success) {
    userDataValidation.error;
  } else {
    const { data, error } = await supabaseDb.auth.signUp({
      email: userDataValidation.data.username,
      password: userDataValidation.data.password,
      options: {
        data: {
          firstName: userDataValidation.data.firstname,
          lastname: userDataValidation.data.lastname,
        },
      },
    });
    if(!error){
      console.log("Successful signup")
    }
  }
}

export async function loginUser(formData: FormData) {
  const userData = LoginSchema.safeParse({
    username: formData.get("userName"),
    password: formData.get("password"),
  });
  if (!userData.success) {
    userData.error;
  } else {
    const { data, error } = await supabaseDb.auth.signInWithPassword({
      email: userData.data.username,
      password: userData.data.password,
    });
    if(!error){
        console.log("Successful signup")
    }
  }
}

/* Journal related table function */

export async function createJournal(formData: FormData) {}
