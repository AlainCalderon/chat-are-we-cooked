"use client";
import Link from "next/link";

export default function UserJournalModal({
  journalData,
}: {
  journalData: any[];
}) {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 content-strecth">
        {journalData.map((journal) => (
          <Link key={journal.id} href={`/journal/${journal.id}`}>
            <div className="p-4 border-t border-r border-b border-slate-100 h-96">
              {journal.title}
              <span className="text-align-end"> {journal.created_at}</span>
            </div>
          </Link>
        ))
        }
      </div>
    </>
  );
}
