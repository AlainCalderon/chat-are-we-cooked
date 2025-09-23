"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { createJournal } from "@lib/serverActions";

export default function JournalModal() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-stone-500 col-start-10"
      >
        Create an entry
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30">
          <DialogPanel
            className="
      w-4/5 h-4/5 rounded-xl p-6
          border-1 center flex flex-col mx-auto
        "
          >
            <form
              id="journal-data"
              action={createJournal}
              className="flex flex-col flex-grow"
            >
              <DialogTitle className="font-bold">
                Create a journal entry
              </DialogTitle>
              <input
                type="text"
                id="journal-title"
                className="border-b-2 border-stone-500 mb-4"
              />
              <textarea
                id="journal-entry"
                className="border-2 border-stone-500 flex-grow"
              ></textarea>
            </form>

            <div className="flex gap-4">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button onClick={() => setOpen(false)} form="journal-data">
                Save Journal
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
