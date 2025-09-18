import { createClient } from "@supaORM/server";
import { redirect } from "next/navigation";
export default async function Journal() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  

  return (
    // conditional component. If user journals are empty show "Currently no journals" else list journals in a card format ( see inspo page )
    <>
      <div>
        <h1>Journals</h1>
      </div>
    </>
  );
}
