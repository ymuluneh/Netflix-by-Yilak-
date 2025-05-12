import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.jpeg.png";
import "./Header.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

function Header() {
  return (
    <Navbar expand="lg" className=" bg-body-tertiary">
      <Container header fluid header__nav>
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo png" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">TV Shows</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action2">New & Popular</Nav.Link>
            <Nav.Link href="#action2">Games</Nav.Link>
            <Nav.Link href="#action2">My List</Nav.Link>
            <Nav.Link href="#action2">Browse by Languages</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <SearchIcon />

            <NotificationsActiveIcon />
            <Nav.Link href="#action2">kids</Nav.Link>
            <AccountBoxIcon />
            <ArrowDropDownCircleIcon />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
