import { Button } from "react-bootstrap";
import React, { useLayoutEffect, useState} from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Input from "../../components/UI/Input/Input";
import "./style.css";
import {  useDispatch } from "react-redux";
import { submitFeedBack } from "../../actions/feedback.actions";
const Footer = () => {
  //   useLayoutEffect(() => {
  //     window.scrollTo(0, 0)
  // });
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const feedbackForm=(e)=>{
    e.preventDefault();
    const feedback={name,email,subject,message};
    dispatch(submitFeedBack(feedback));
  }
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
              <b>Email: </b>inquirysambhavlaw@gmail.com
            </p>
          </Col>
          <Col md={{ span: 3, offset: 0 }}>
            <h3 className='fw-bold fs-4 text-uppercase'>Get in touch with us</h3>
            <Form className="p-2" onSubmit={feedbackForm}>
              <p>
                Your Email address will not publish required field are marked
              </p>
              <Input placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} type="text" />
              <Input placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
              <Input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} type="text" />
              <br />
              <textarea
                className="form-control"
                row="3"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <Button variant="dark" type='submit' size="lg" className='w-100 mt-3'>Submit</Button>
              
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
