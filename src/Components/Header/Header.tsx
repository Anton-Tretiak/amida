import { Container, Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Amida</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" defaultActiveKey="#catalog" className="me-auto">
            <Nav.Link href="#catalog">Catalog</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
