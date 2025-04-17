import React, { useState } from 'react';
import { CohereClientV2 } from 'cohere-ai'


const cohere = new CohereClientV2({
  token: 'YvNDXA10e30C53q8Z5hrZKohNvZWjluAG55hz3Sb', // Replace with your API key
});



interface Message {
  sender: 'bot' | 'user';
  text: string;
}


const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user's message to the message list
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);

    // Get bot's response
    const botResponse = await getBotResponse(input);

    // Add bot's response to the message list
    setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    setInput('');
  };

  // Function to get bot response from Cohere API
  const getBotResponse = async (userInput: string): Promise<string> => {
    try {
      const response = await cohere.chat({
        model: 'command-r-plus',
        messages: [
          {
            role: 'user',
            content: userInput, // Pass the userInput dynamically
          },
        ],
      });
      console.log(response.message.content[0].text);
      return response.message.content[0].text;
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return "An error occurred while trying to get a response. Please try again.";
    }
  };
  
  

  return (
    <div className="max-w-md w-full h-full p-4 rounded-lg shadow text-black">
      <div className="h-80 overflow-y-auto bg-white p-4 rounded-lg border border-gray-300">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-2 rounded-lg text-sm ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-l-lg border-gray-300 outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
