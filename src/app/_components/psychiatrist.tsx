"use client";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/ai-elements/conversation";

import { Message, MessageContent } from "@/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
  PromptInputToolbar,
  PromptInputBody,
  PromptInputButton,
  PromptInputMessage,
} from "@/ai-elements/prompt-input";

import { Response } from "@/ai-elements/response";
import { Button } from "@/components/ui/button";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import { sendJournal, chatPsych } from "@lib/chat-ai";

// model ollama name Psychotherapy-LLM_PsychoCounsel-Llama3-8B-GGUF:Q4_K_M
export default function Psych() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: `/api/chat`,
    }),
  });
  const [input, setInput] = useState("");

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);

    if (!hasText) {
      return;
    }

    sendMessage({
      text: message.text || "Sent with attachments",
      files: message.files,
    });
    setInput("");
  };

  return (
    <>
      <div className="w-full mx-auto p-6 relative size-full rounded-lg border h-[600px] col-span-6">
        <div className="flex flex-col h-full w-full">
          <Conversation className="relative w-full" style={{ height: "500px" }}>
            <ConversationContent>
              {messages.length === 0 ? (
                <ConversationEmptyState
                  title="No messages yet"
                  description="Start a conversation to see messages here"
                />
              ) : (
                messages.map((message) => (
                  <Message from={message.role} key={message.id}>
                    <MessageContent>
                      {message.parts.map((part, i) => {
                        switch (part.type) {
                          case "text": // we don't use any reasoning or tool calls in this example
                            return (
                              <Response key={`${message.id}-${i}`}>
                                {part.text}
                              </Response>
                            );
                          default:
                            return null;
                        }
                      })}
                    </MessageContent>
                  </Message>
                ))
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <PromptInput
            onSubmit={handleSubmit}
            className="mt-4"
            globalDrop
            multiple
          >
            <PromptInputBody>
              <PromptInputTextarea
                value={input}
                placeholder="Say something..."
                onChange={(e) => setInput(e.currentTarget.value)}
                className="pr-12"
              />
            </PromptInputBody>

            <PromptInputToolbar>
              <Button
                onClick={() => {}}
                className="absolute bottom-1 right-15 px-1  text-sm"
              >
                <span>Read my journal</span>
              </Button>

              <PromptInputSubmit
                status={status === "streaming" ? "streaming" : "ready"}
                disabled={!input.trim()}
                className="absolute bottom-1 right-1"
              />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </div>
    </>
  );
}
