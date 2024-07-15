// pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
};

const getResponse = (userInput: string): string => {
  const responses: { [key: string]: string } = {
    hi: "Hello! Welcome to my portfolio website.",
    "who are you?": "I'm a full-stack web developer specializing in Web3 and other modern web technologies.",
    projects: "You can check out my projects in the 'Projects' section of my portfolio.",
    contact: "Feel free to reach out to me via the 'Contact' section.",
    bye: "Goodbye! Have a great day!"
  };
  return responses[userInput.toLowerCase()] || "I'm not sure about that. Can you please check my portfolio for more information?";
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;
      const response = getResponse(message);
      res.status(200).json({ response });
    } catch (error) {
      console.error('Error processing chat message:', error);
      res.status(500).json({ response: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
