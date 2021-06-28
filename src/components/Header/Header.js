import { useState ,useEffect} from "react";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";
import "./style.css";
const Header = (props) => {
  const [login, setlogin] = useState("");
  const [temp, settemp] = useState("Login");
  useEffect(()=>{
    if (localStorage.getItem("user")) {
      settemp("My Profile");
      setlogin("d-none");
    } 
  
  })
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="ms-2 me-2 "
      >
        <Navbar.Brand className="p-2 w-25 ">
          <a href="/" className="p-3">
            <img className="" alt="" src={Logo} width="100" />
          </a>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" d-flex align-items-center justify-content-between w-100">
            <Nav.Link className="navLinks " href="/">
              <Link to="/course" className="text-decoration-none text-reset ">
                Course
              </Link>
            </Nav.Link>
            <Nav.Link className="navLinks ">
              <Link to="/mock-test" className="text-decoration-none text-reset">
                Mock Test
              </Link>
            </Nav.Link>
            <Nav.Link className="navLinks">
              <Link to="/about" className="text-decoration-none text-reset">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className={`${login}`}>
              <Link to="/signup" className="text-decoration-none text-reset">
                Register
              </Link>
            </Nav.Link>
            <Nav.Link className="navLinks">
              <Link to="/signin" className="text-decoration-none text-reset">
                {temp}
              </Link>
            </Nav.Link>
            <Nav className="">
              <Nav.Link
                href="https://www.facebook.com/sambhavlaw"
                target="_blank"
              >
                <FaFacebookSquare className="fbIcon" />
              </Nav.Link>
              <Nav.Link
                href="https://chat.whatsapp.com/Brb5fUb2F9vFsofeSZRMfY"
                target="_blank"
              >
                <FaWhatsapp className="whatsappIcon" />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/sambhavlaw/"
                target="_blank"
              >
                <FaInstagram className="instaIcon" />
              </Nav.Link>
              <Nav.Link href="https://t.me/sambhavlaw">
                <FaTelegramPlane className="telgramIcon" />
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/channel/UCQUW5mf-ygF_B3Egf1uorug"
                target="_blank"
              >
                <FaYoutube className="youtubeIcon" />
              </Nav.Link>
            </Nav>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
