import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";

const ConversationsContext = React.createContext();

export const useConversations = () => {
  return useContext(ConversationsContext);
};

export const ConversationsProvider = ({ children }) => {
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  const selectConversationIndex = (idx) => {};

  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );

  const { contacts } = useContacts();

  const createConversation = (recipients) => {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  };
  //format conversations
  const formattedConversations = conversations.map((conversation, index) => {
    //map through recipients
    const recipients = conversation.recipients.map((recipient) => {
      //find specific recipient
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      //return an object with recipient ID and name
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    const selected = index === selectedConversationIndex;
    return { ...conversation, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
};
