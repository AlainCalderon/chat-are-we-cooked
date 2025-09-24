"use server";
import { createClient } from "@supaORM/server";
import { SignupFormSchema, LoginSchema, JournalSchema } from "@lib/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function isLoggedIn() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return false;
  }
  return true;
}

/* User related table functions */
export async function createUser(formData: FormData) {
  const supabase = await createClient();
  const userDataValidation = SignupFormSchema.safeParse({
    username: formData.get("userName"),
    password: formData.get("password"),
    firstname: formData.get("firstName"),
    lastname: formData.get("lastName"),
  });

  if (!userDataValidation.success) {
    console.log(userDataValidation.error);
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
      revalidatePath("/", "layout");
      redirect("/journal");
    }
  }
}

export async function loginUser(formData: FormData) {
  const supabase = await createClient();
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
      revalidatePath("/", "layout");
      console.log("Successful login");
      redirect("/journal");
    }
  }
}

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  redirect("/");
}

/* Journal related table function */

export async function createJournal(formData: FormData) {
  const supabase = await createClient();
  const userData = await supabase.auth.getUser();
  const journalData = JournalSchema.safeParse({
    title: formData.get("journal-title"),
    entry: formData.get("journal-entry"),
  });

  console.log(journalData);

  if (!journalData.success) {
    console.log(journalData.error);
  } else {
    const { data, error } = await supabase
      .from("Journal")
      .insert({
        title: journalData.data?.title,
        user_entry: journalData.data?.entry,
        user_id: userData.data.user?.id,
      })
      .select();
    console.log(data);
  }
}

export async function fetchJournals() {
  const supabase = await createClient();
  const userData = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("Journal")
    .select()
    .eq("user_id", `${userData.data.user?.id}`);

  return { data, error };
}
