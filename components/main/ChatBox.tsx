// components/ChatBox.tsx
"use client"
import { useState } from 'react';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState<{ user: string, bot: string }[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false); // State to track bot typing state

  const handleSend = async () => {
    try {
      console.log('Sending message:', message);

      // Add user message to chat log immediately
      setChatLog([...chatLog, { user: message, bot: '' }]);
      setMessage('');

      // Set bot typing indicator
      setIsBotTyping(true);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server error: ${errorMessage}`);
      }

      const data = await response.json();
      console.log('Received response:', data);

      // Simulate delay for typing indicator
      await new Promise(resolve => setTimeout(resolve, 500));

      // Update chat log with bot response
      setChatLog(prevChatLog => {
        const updatedLog = [...prevChatLog];
        updatedLog[updatedLog.length - 1].bot = data.response; // Update the last entry with bot response
        return updatedLog;
      });

    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error state or retry logic if needed
    } finally {
      // Turn off bot typing indicator
      setIsBotTyping(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-5 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3  border-2  border-gray-600 text-white rounded-full shadow-lg hover:bg-gray-800"
      >
        💬
      </button>

      {isOpen && (
        <div className="w-80 h-96 bg-gray-700 border-2  rounded-lg shadow-lg p-4 mt-2">
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto mb-4">
              {chatLog.map((entry, index) => (
                <div key={index} className="mb-2 text-white">
                  {entry.user && <p><strong className='text-blue-600'>You:</strong> {entry.user}</p>}
                  {entry.bot && <p><strong className='text-purple-500'>Bot:</strong> {entry.bot}</p>}
                  {isBotTyping && index === chatLog.length - 1 && ( // Display typing indicator if last entry and bot is typing
                    <p><strong className='text-purple-500'>Bot:</strong> ...</p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
