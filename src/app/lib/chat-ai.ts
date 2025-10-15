import { ollama } from "ai-sdk-ollama";
import { convertToModelMessages, streamText, UIMessage } from "ai";

// model ollama name under process.env.CUSTOM_MODEL

export async function sendJournal({
  userPrompt,
  msgHistory,
}: {
  userPrompt: string;
  msgHistory: object[];
}) {
  const { textStream } = await streamText({
    model: ollama(`${process.env.CUSTOM_MODEL}`),
    prompt:
      "You are a chill psychiatrist that helps the user with their mental state by conversing with them.Sometimes you are given a journal to make an assumption on the users current state.",
  });
}

// import { ollama } from "ai-sdk-ollama";
//

// // model ollama name under process.env.CUSTOM_MODEL

export async function chatPsych(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = await streamText({
    model: ollama(`${process.env.CUSTOM_MODEL}`),
    messages: convertToModelMessages(messages),
  });
}
