import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Row, Container, Button } from "react-bootstrap";
import { fetchCourse } from "../../actions/order.actions";
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom'; 
const UserProfile = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [courseList, setCourseList] = useState(null);

  if (!(order.loading || order.loaded)) dispatch(fetchCourse());

  useEffect(() => {
    if (order.loaded && order.value) {
      console.log(order.value)
      setCourseList(
        Object.values(order.value)[0].map((element, index, array) => {
          console.log(array);
          return <Link to={`/course/clat/${element.courseId}`}>{element.courseName}</Link>;
        })
      );
    }
  },[order.loaded,order.value]);
  const logoutHandler = () => {
    //add a dispatch to logout :P
    localStorage.clear();
    window.location.href = "/";
  };

  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col sm={{ span: 3 }}>
              <Button onClick={logoutHandler}>Logout</Button>
            </Col>
            <Col>
              <h2>Welcome, {user.firstName}</h2>
              {courseList || "No Course Purchased Yet "}
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  } else {
    return <Redirect to={"/signin"} />;
  }
};
export default UserProfile;
