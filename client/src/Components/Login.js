import { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

const Login = ({ onIDSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onIDSubmit(idRef.current.value);
  };

  const createNewID = () => {
    onIDSubmit(uuidV4());
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button variant="secondary" onClick={createNewID}>
          Create a new ID
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
