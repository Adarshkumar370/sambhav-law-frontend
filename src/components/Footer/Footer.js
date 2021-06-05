import { Button } from "bootstrap";
import React,{useLayoutEffect} from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Input from "../../components/UI/Input/Input";
import "./style.css";
const Footer = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col md={{ span: 2, offset: 1 }}>
            <Image src={Logo} width="100%" className="p-3 w-75" />
            <p>
              Sambhav Law is an online platform dedicated towards CLAT LLM/PG
              2021 preparation through comprehensive study material and
              interactive mock tests
            </p>
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <h3>Useful Links</h3>
            <Link to='/'>Home</Link><br/>
            <Link to='/about'>About Us</Link><br/>
            <Link to='/refund-policy'>Refund Policy</Link><br/>
            <Link to='/terms-of-service'>Terms of service</Link><br/>
            <Link to='/privacy-policy'>Privacy Policy</Link><br/>
           
            <h2>Contact Us </h2>
            <p> Sambhav Law - A premier institute for clat pg preparation </p>
            <p>
              <b>Phone:</b> put Phone no here
            </p>
            <p>
              <b>Email:</b>thesambhavlaw@gmail.com
            </p>
          </Col>
          <Col md={{ span: 3, offset: 0 }}>
            <h3>Get in touch with us</h3>
            <Form className="p-2">
              <p>
                Your Email address will not publish required field are marked
              </p>
              <Input placeholder="Name *" value="" type="text" />
              <Input placeholder="Email *" value="" type="text" />
              <Input placeholder="Subject" value="" type="text" />
              <br />
              <textarea
                className="form-control"
                row="3"
                placeholder="Message"
              ></textarea>
              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
              <Input type="submit" />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
