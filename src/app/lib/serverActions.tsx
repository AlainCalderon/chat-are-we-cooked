"use server";
import { createClient } from "@supaORM/server";
import { SignupFormSchema, LoginSchema } from "@lib/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const supabase = await createClient();

export async function isLoggedIn(){
  const {data,error} = await supabase.auth.getUser();
  if(error || !data?.user){
    return false;
  }
  return true;
}

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
    const { data, error } = await supabase.auth.signUp({
      email: userDataValidation.data.username,
      password: userDataValidation.data.password,
      options: {
        data: {
          firstName: userDataValidation.data.firstname,
          lastname: userDataValidation.data.lastname,
        },
      },
    });
    //successful sign up 
    if (!error) {

      console.log(`Data object : ${JSON.stringify(data)}`);
      console.log("Successful signup");
      revalidatePath('/','layout')
      window.alert('Successful sign up')
      redirect('/login');
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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.data.username,
      password: userData.data.password,
    });
    if (!error) {
      console.log(`Data object : ${JSON.stringify(data)}`);
       revalidatePath('/','layout')
      window.alert('Successful login')
      redirect('/');
    }
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
}

/* Journal related table function */

export async function createJournal(formData: FormData) {}
