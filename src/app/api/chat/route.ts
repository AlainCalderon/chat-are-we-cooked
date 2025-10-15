import { createOllama } from "ai-sdk-ollama";
import { convertToModelMessages, streamText, UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const ollama = createOllama({
    baseURL: "http://localhost:11434",
  });
  const result = await streamText({
    model: ollama(process.env.CUSTOM_MODEL!),
    messages: convertToModelMessages(messages),
  });

  

  return  result.toUIMessageStreamResponse();
  

}
