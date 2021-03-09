import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

const Conversations = () => {
  const { conversations } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, idx) => {
        return (
          <ListGroup.Item key={idx}>
            {conversation.recipients
              .map((recipient) => {
                return recipient.name;
              })
              .join(", ")}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Conversations;
