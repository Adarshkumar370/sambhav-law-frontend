import React, { useState, useEffect } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Input from "../../../components/UI/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Login } from "../../../actions/auth.actions";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
  
      setError(auth.error);
      console.log("error");
    
  }, [auth.error]);

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(Login(user));
    console.log(auth.error);
  };
  return (
    <>
      <Header />
      <Container>
        <Card style={{ width: "35rem" }} className="m-3 p-2 mx-auto">
          <h1 class="display-6 text-center">Login To Sambhav Law</h1>
          <Card.Body>
            <Card.Text>
              
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button variant="primary" size="lg" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Text>
            <p className='text-light bg-danger d-inline-flex  m-1 border rounded' >{error}</p>
            <Card.Text>
              Dont Have a Account?{" "}
              <Card.Link>
                <Link to="/signup">SignUp</Link>
              </Card.Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Signin;
