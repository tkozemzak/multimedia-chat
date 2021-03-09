import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

const NewConversationModal = ({ closeModal }) => {
  const [selectedContactIDs, setSelectedContactIDs] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    createConversation(selectedContactIDs);

    closeModal();
  };

  const handleCheckboxChange = (contactID) => {
    setSelectedContactIDs((prevSelectedContactIDs) => {
      if (prevSelectedContactIDs.includes(contactID)) {
        return prevSelectedContactIDs.filter((prevID) => {
          return contactID !== prevID;
        });
      } else {
        return [...prevSelectedContactIDs, contactID];
      }
    });
  };

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => {
            return (
              <Form.Group controlId={contact.id}>
                <Form.Check
                  type="checkbox"
                  value={selectedContactIDs.includes(contact.id)}
                  label={contact.name}
                  onChange={() => handleCheckboxChange(contact.id)}
                />
              </Form.Group>
            );
          })}
          <Button type="submit">Create Conversation</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
