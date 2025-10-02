import { createClient } from "@supaORM/server";
import { redirect } from "next/navigation";
import { fetchJournals } from "@lib/serverActions";

import JournalModal from "@components/journalModal";
import UserJournalModal from "@components/userJournalModal";

export default async function Journal() {
  // user checking

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/log-in");
  }

  const userJournals = await fetchJournals();

  if (userJournals.error) {
    console.log(userJournals.error);
  }
  let journals: any[] = userJournals!.data as any;

  console.log(userJournals);
  if (journals!.length < 1) {
    return (
      <>
   <div className="grid col-span-10 py-4 h-24 w-full border-b border-slate-100 ">
        <h2 className="col-span-4 col-start-5">You Currently have no Journals</h2>
        <JournalModal />
      </div>
      </>
    );
  }

  return (
    // conditional component. If user journals are empty show "Currently no journals" else list journals in a card format ( see inspo page )
    <>
      <div className="grid col-span-10 py-4 h-24 w-full border-b border-slate-100 ">
        <h2 className="col-span-4 col-start-5">Journals</h2>
        <JournalModal />
      </div>

      <UserJournalModal journalData={journals} />
    </>
  );
}
