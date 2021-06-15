import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Form, Row } from "react-bootstrap";
import Input from "../../components/UI/Input/Input";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
const BuyCourse = () => {
  const order = useSelector((state) => state.order);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [addressl1, setAddressl1] = useState("");
  const [addressl2, setAddressl2] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const price = localStorage.getItem("CourseId");
  const courseId = localStorage.getItem("Price");
  const dispatch = useDispatch();
  useEffect(() => {
    setError(order.error);
    console.log("error");
  }, [order.error]);

  const buyCourse = (e) => {
    e.preventDefault();
    const orderdetail = {
      firstName,
      lastName,
      email,
      phoneNo,
      addressl1,
      addressl2,
      city,
      pincode,
      price,
      courseId,
    };
    dispatch();
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <h1>Checkout</h1>
          <Col>
            <Form onSubmit={buyCourse}>
              <Input
                label="First Name"
                placeholder=" First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                label="Last Name"
                placeholder=" Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                label="Email"
                placeholder=" Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Mobile Number"
                placeholder=" Mobile Number"
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <Input
                label="Address Line 1"
                placeholder=" Address Line 1"
                type="text"
                value={addressl1}
                onChange={(e) => setAddressl1(e.target.value)}
              />
              <Input
                label="Address Line 2 "
                placeholder=" Address Line 2"
                type="text"
                value={addressl2}
                onChange={(e) => setAddressl2(e.target.value)}
              />
              <Input
                label="City"
                placeholder="City"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                label="Pincode"
                placeholder=" Pincode"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Button value="submit">Submit</Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BuyCourse;
