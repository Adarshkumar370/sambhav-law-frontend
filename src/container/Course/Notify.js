import React, { useState, useEffect } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/UI/Input/Input";

import { useDispatch, useSelector } from "react-redux";
import { NotifyAdd } from "../../actions/notify.action";

const Notify = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const notify = useSelector((state) => state.notify);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notify.loading) setError(notify.status);
  }, [notify.loading]);

  const notifyHandler = (e) => {
    e.preventDefault();
    const _user = {
      email,
    };
    dispatch(NotifyAdd(_user));
  };

  return (
    <>
      <Header />
      <Container className="m-3 p-3">
        <Row>
          <h1>Notify Me</h1>
        </Row>
        <Row>
          <Form onSubmit={notifyHandler}>
            <Input
              label="Email"
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="primary" className='w-50 mt-4' size="lg" type="submit">
              Submit
            </Button>
            <p>{error}</p>
          </Form>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Notify;
