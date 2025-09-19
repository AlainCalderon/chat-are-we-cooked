import { createClient } from "@supaORM/server";
import { redirect } from "next/navigation";
import { fetchJournals } from "@lib/serverActions";
export default async function Journal() {
  const supabase = await createClient();
  const userJournals = await fetchJournals();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  if (!userJournals) {
    return (
      <>
        <div>
          <h2>You currently have no journals</h2>
        </div>
      </>
    );
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
