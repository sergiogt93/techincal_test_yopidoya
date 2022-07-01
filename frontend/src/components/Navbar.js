import { Container, Nav, Navbar } from "react-bootstrap";

export const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="/login">Cambiar usuario iniciado</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
