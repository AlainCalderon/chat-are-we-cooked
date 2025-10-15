import { fetchJournalEntry } from "@lib/serverActions";
import { redirect } from "next/navigation";
import  Psych  from "@components/psychiatrist"

export default async function JournalPage({
  params,
}: {
  params: Promise<{ journalId: string }>;
}) {
  const { journalId } = await params;
  let journalRes = await fetchJournalEntry(journalId);

  if (journalRes.error) {
    console.log(journalRes.error);
    redirect("/journal");
  }
  let journalData = journalRes.data;

  return (
    <>
      <div className="grid grid-cols-10 py-4 h-screen w-full my-5 border-b border-slate-100">

        <article className="text-wrap mx-auto mt-4 col-span-5 tracking wide px-4">
          <h1 className="my-4">{journalData![0].title}</h1>
          <p> {journalData![0].user_entry}</p>
        </article>

        <div className="col-span-4 w-full px-4">
          <Psych/>
        </div>

      </div>

    </>
  );
}
