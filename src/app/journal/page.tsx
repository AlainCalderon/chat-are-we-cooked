import { createClient } from "@supaORM/server";
import { redirect } from "next/navigation";
import { fetchJournals } from "@lib/serverActions";

import JournalModal from "@components/journalModal";

export default async function Journal() {
  // user checking
  const supabase = await createClient();
  const userJournals = await fetchJournals();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  let journals = userJournals.data;

  console.log(userJournals);

  if (journals!.length < 1) {
    return (
      <>
        <div className="grid col-span-10">
          <h2 className="col-span-4 col-start-5 ">
            You currently have no journals
          </h2>
          <JournalModal />
        </div>
      </>
    );
  }

  return (
    // conditional component. If user journals are empty show "Currently no journals" else list journals in a card format ( see inspo page )
    <>
      <div>
        <h1>Journals</h1>
        <JournalModal />
      </div>
    </>
  );
}
