import { Button } from "bootstrap";
import React, { useLayoutEffect } from "react";
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
        <Row className='fs-6'>
          <Col md={{ span: 2, offset: 2 }} className='d-flex flex-column'>
            <Image src={Logo} width="100%" className="p-1 w-50 mx-auto" />
            <p className='justify mt-3'>
              Sambhav Law is an online platform dedicated towards CLAT LLM/PG
              2021 preparation through comprehensive study material and
              interactive mock tests
            </p>
          </Col>
          <Col md={{ span: 2, offset: 1 }} >
            <h3 className="fw-bold fs-4 text-uppercase">Useful Links</h3>
            <Link className="text-reset " to="/">
              Home
            </Link>
            <br />
            <Link className="text-reset " to="/about">
              About Us
            </Link>
            <br />
            <Link className="text-reset " to="/refund-policy">
              Refund Policy
            </Link>
            <br />
            <Link className="text-reset " to="/terms-of-service">
              Terms of service
            </Link>
            <br />
            <Link className="text-reset " to="/privacy-policy">
              Privacy Policy
            </Link>
            <br />

            <h2 className='mt-3 fw-bold fs-4 text-uppercase'>Contact Us </h2>
            {/* <p className='mt-2'> Sambhav Law - A premier institute for clat pg preparation </p> */}
            <p>
              <b>Phone:</b> +91-9555896908
            </p>
            <p>
              <b>Email: </b>thesambhavlaw@gmail.com
            </p>
          </Col>
          <Col md={{ span: 3, offset: 0 }}>
            <h3 className='fw-bold fs-4 text-uppercase'>Get in touch with us</h3>
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
          <hr className='mt-5'/>
        </Row>
        <Row ><h5 className='  text-center'>© Copyright Sambhav Law E-Learning Group (2021) All Rights Reserved </h5></Row>
      </Container>
    </>
  );
};

export default Footer;
