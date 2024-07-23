// BotpressChatbot.tsx
"use client"
import React, { useEffect } from 'react';

const BotpressChatbot = () => {
  useEffect(() => {
    const initBotpress = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with bot",
        "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "bc1748de-ec89-460e-b0a1-ee0b6a3c0d01",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "bc1748de-ec89-460e-b0a1-ee0b6a3c0d01",
        "webhookId": "87642a10-d669-4275-b0c4-031052de205b",
        "lazySocket": true,
        "themeName": "prism",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/0663d550-d6b1-43e7-9915-72adb8712921/v72791/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb",
        "allowedOrigins": []
      });
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.onload = initBotpress;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // Botpress script will be initialized in useEffect
};

export default BotpressChatbot;
