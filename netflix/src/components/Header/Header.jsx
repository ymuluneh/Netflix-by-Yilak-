import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/images.jpeg";
import "./Header.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    } else {
      alert("Please enter a search term.");
    }

    // const handleKeyPress = (event) => {
    //   if (event.key === "Enter") {
    //     handleSearch();
    //   }
    // };

  };
 

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="header__nav">
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo png" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">TV Shows</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action2">New & Popular</Nav.Link>
            <Nav.Link href="#action2">Games</Nav.Link>
            <Nav.Link href="#action2">My List</Nav.Link>
            <Nav.Link href="#action2">Browse by Languages</Nav.Link>
          </Nav>

          {/* Search Input and Button */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" onClick={handleSearch}>
              <SearchIcon />
            </Button>
          </Form>

          <NotificationsActiveIcon />
          {/* <Nav.Link href="#action2">Kids</Nav.Link> */}
          <AccountBoxIcon />
          <ArrowDropDownCircleIcon />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
