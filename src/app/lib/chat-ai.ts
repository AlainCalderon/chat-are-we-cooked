import { createOllama } from "ai-sdk-ollama";
import { convertToModelMessages, streamText, UIMessage } from "ai";

// model ollama name under process.env.CUSTOM_MODEL
// function if not gonna be used on useChat function in ai sdk
export async function sendJournal(userJournal: string) {
  const ollama = createOllama({
    baseURL: "http://localhost:11434",
  });
  const result = await streamText({
    model: ollama(`${process.env.CUSTOM_MODEL!}`),
    prompt: `You are a chill psychiatrist that helps the user with their mental state by conversing with them.You are given a user journal entry to make an assumption on the users current mental state. Below is the journal entry
      <User Journal Entry> : ${userJournal}`,
  });

  return result.toUIMessageStreamResponse();
}
