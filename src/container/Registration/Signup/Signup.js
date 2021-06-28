import React, { useState, useEffect } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import signup from "../../../actions/user.actions";
import Input from "../../../components/UI/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import "./style.css";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    setError(user.error);
    console.log("error");
    if(user.submitSuccess)
    window.location.href = "/signin";
  }, [user.error,user.submitSuccess]);

  const userSignup = (e) => {
    e.preventDefault();
    const userdetail = {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      collegeName,
    };
    dispatch(signup(userdetail));
    
  };
  if (localStorage.getItem("user")) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <>
      <Header />
      <Container>
        <Card
          style={{ width: "25rem" }}
          className="m-3 p-2 shadow-c mx-auto border border-1 border-dark mt-5 mb-5"
        >
          <h1 class="display-6 fw-bold m-2">Registration Form</h1>
          <Card.Body>
            <Card.Text>
              <Form onSubmit={userSignup}>
                <Input
                  label="First Name"
                  placeholder="First Name"
                  value={firstName}
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  req="true"
                />
                <Input
                  label="Last Name"
                  placeholder="Last Name"
                  value={lastName}
                  type="text"
                  req="true"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  req="true"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  req="true"
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="6"
                  
                />
                <Input
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  type="text"
                  req="true"
                  onChange={(e) => setMobileNumber(e.target.value)}
                  minLength="10"
                  maxLength='10'
                />
                <Input
                  label="College Name"
                  placeholder="College Name"
                  value={collegeName}
                  type="text"
                  req="true"
                  onChange={(e) => setCollegeName(e.target.value)}
                />
                <p>{error}</p>
                <Button
                  size="lg"
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                >
                  Register
                </Button>
              </Form>
            </Card.Text>
            <Card.Text>
              Have an Account?{" "}
              <Card.Link>
                <Link to="/signin">Signin</Link>
              </Card.Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Signup;
