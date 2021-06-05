import React, { useState,useEffect } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import signup from "../../../actions/user.actions";
import Input from "../../../components/UI/Input/Input";
import { useSelector, useDispatch } from "react-redux";

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
   console.log('error');
  }, [user.error]);

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
  return (
    <>
      <Header />
      <Container>
        <Card style={{ width: "35rem" }} className="m-3 p-2 mx-auto">
        <h1 class="display-6 text-center">Registration Form</h1>
          <Card.Body>
            
            <Card.Text>
              <Form onSubmit={userSignup}>
                <Input
                  label="First Name"
                  placeholder="First Name"
                  value={firstName}
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                /><br/>
                <Input
                  label="Last Name"
                  placeholder="Last Name"
                  value={lastName}
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                /><br/>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                /><br/>
                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <Input
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  type="text"
                  onChange={(e) => setMobileNumber(e.target.value)}
                /><br/>
                <Input
                  label="College Name"
                  placeholder="College Name"
                  value={collegeName}
                  type="text"
                  onChange={(e) => setCollegeName(e.target.value)}
                /><br/>
                <p>{error}</p>
                <Button size="lg"
                  variant="primary"
                  type="submit"
                  className="d-block mt-3"
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
      <Footer />
    </>
  );
};

export default Signup;
