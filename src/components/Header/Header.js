import { Navbar, Nav, Container, Row } from "react-bootstrap";
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
  var temp;
  if(localStorage.getItem('user'))
    temp="My Profile";
    else
    temp="Login";
  console.log()
  return (
    <>
      <Container fluid className="sticky-top">
        <Row className="line"></Row>
        <Row>
          <Navbar variant="light" className="navBar">
            <Navbar.Brand href="/" className="col-3 p-2">
              <img className="logo" alt="" src={Logo} width="100" />{" "}
            </Navbar.Brand>
            <Nav className="links w-100 d-flex justify-content-between align-items-center">
              <Nav.Link className="navLinks p-0" href="/">
                <Link to="/course" className='text-decoration-none text-reset p-3'>Course</Link>
              </Nav.Link>
              <Nav.Link className="navLinks" >
                <Link to="/mock-test" className='text-decoration-none text-reset'>Mock Test</Link>
              </Nav.Link>
              <Nav.Link className="navLinks">
                <Link to="/about" className='text-decoration-none text-reset'>About</Link>
              </Nav.Link>
              <Nav.Link className="navLinks">
                <Link to="/carrer" className='text-decoration-none text-reset'>Career</Link>
              </Nav.Link>
              <Nav.Link className="navLinks">
                <Link to="/signin" className='text-decoration-none text-reset'>{temp}</Link>
              </Nav.Link>
              
              <Nav className="d-flex align-items-center justify-content-evenly">
                <Nav.Link href='https://www.facebook.com/sambhavlaw' target="_blank">
                  <FaFacebookSquare className='fbIcon'/>
                </Nav.Link>
                <Nav.Link href="https://chat.whatsapp.com/Brb5fUb2F9vFsofeSZRMfY" target="_blank">
                  <FaWhatsapp className='whatsappIcon'/> 
                </Nav.Link>
                <Nav.Link href='https://www.instagram.com/sambhavlaw/' target="_blank">
                  <FaInstagram  className='instaIcon'/>
                </Nav.Link>
                <Nav.Link href='https://t.me/sambhavlaw'>
                  <FaTelegramPlane className='telgramIcon'/>
                </Nav.Link>
                <Nav.Link href='https://www.youtube.com/channel/UCQUW5mf-ygF_B3Egf1uorug' target="_blank">
                  <FaYoutube className='youtubeIcon'/>
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar>
        </Row>
      </Container>
    </>
  );
};

export default Header;
