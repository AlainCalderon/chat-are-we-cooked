import { fetchJournalEntry } from "@lib/serverActions";

export default async function JournalPage({
  param,
}: {
  param: Promise<{ journalId: string }>;
}) {
  const { journalId } = await param;
  let journalData = await fetchJournalEntry(journalId);

  return <>
    
    
  
  </>;
}
