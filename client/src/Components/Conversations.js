import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, idx) => {
        return (
          <ListGroup.Item
            key={idx}
            action
            onClick={() => selectConversationIndex(idx)}
            active={conversation.selected}
          >
            {conversation.recipients
              .map((r) => {
                return r.name;
              })
              .join(", ")}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Conversations;
