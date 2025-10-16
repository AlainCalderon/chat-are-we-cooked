# chat-are-we-cooked.
> Acts as a private journal with a chatbot inside each journal entry created. You can chat the psychiatrist bot or ask it to read your journal and give an assessment on you

## Pet project exploring nextJS and AI chatbots 
- Uses **SupaBase** ( Postgre ORM) for db and authentication functionality
- Deployed using **vercel**
- Uses custom tensor model from hugging face as pychiatrist for chatbot.
- Uses my local instance of **Ollama** for api calling 
- Deployed / production instance will use ngrok for its api call since the ollama / ai model instance only exists on my local machine ( will have to use ngrok http 11434 --host-header="localhost:11434" ).
