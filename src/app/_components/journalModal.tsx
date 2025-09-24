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
        className="relative z-50 text-black"
      >
        <div className="fixed inset-0 bg-black/30">
          <DialogPanel
            className="
      w-4/5 h-4/5 rounded-xl p-6
          border-1 center flex flex-col mx-auto shadow-xl  overflow-hidden relative
        "
          >
            <div
              className="
            absolute inset-0 z-0
            bg-linear-to-b from-paper to-notebook bg-repeatx-y  // Custom background image or pattern
            [background-size:100%_40px] // Adjust line height
            [background-position:0_20px] // Adjust vertical start of lines
          "
            ></div>
            <div
              className="
            absolute left-[50px] top-0 bottom-0 w-0.5 bg-red-300 z-10
          "
            ></div>
            <div className="relative z-20 flex flex-col flex-grow pl-16 pr-6 pt-4 pb-4">
              {" "}
              {/* Increased left padding for the red line */}
              <DialogTitle className="font-bold">
                Create a journal entry
              </DialogTitle>
              <form
                id="journal-data"
                name="journal-data"
                action={createJournal}
                className="flex flex-col flex-grow"
              >
                <input
                  type="text"
                  id="journal-title"
                  name="journal-title"
                  className="border-b-2 border-stone-500 mb-4 bg-transparent focus:outline-none"
                  placeholder="Journal title"
                />
                <textarea
                  id="journal-entry"
                  name="journal-entry"
                  className="border-2 border-stone-500 flex-grow bg-transparent focus:outline-none"
                  placeholder="Start writing..."
                ></textarea>
              </form>
              <div className="flex gap-4">
                <button onClick={() => setOpen(false)}>Cancel</button>
                <button
                  type="submit"
                  form="journal-data"
                >
                  Save Journal
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
