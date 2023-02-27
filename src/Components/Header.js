import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Header() {
  return (
    <div>
      <Navbar className="fixed-top header" bg="white" expand="lg">
        <Container>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.reload();
            }}
          >
            <img alt="brand" src={logo} id="brand" />
          </Navbar.Brand>
          <div className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav>
                  <button className="nav-links">Explore</button>
                  <button className="nav-links">Search</button>
                  <button className="nav-links">Hotel</button>
                  <button className="nav-links">Offers</button>
                  <NotificationsNoneIcon className="nav-links" />
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
