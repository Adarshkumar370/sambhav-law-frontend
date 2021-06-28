import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Row, Container, Button } from "react-bootstrap";
import { fetchCourse } from "../../actions/order.actions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [courseList, setCourseList] = useState(null);
  const [purchase, setPurchase] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log();
      if (!(order.loading || order.loaded)) {
        dispatch(fetchCourse(user["email"]));
      }
    }
  });

  useEffect(() => {
    if (order.value) {
      console.log(order.value);
      if (order.value[0].length !== 0) setPurchase("Purchased Course ");
      else
      setPurchase("No Course Purchased Yet");
      localStorage.setItem(
        "purchaseList",
        JSON.stringify(Object.values(order.value)[0])
      );
      setCourseList(
        Object.values(order.value)[0].map((element, index, array) => {
          return (
            <>
              <li><Link to={`/course/clat/${element.courseId}`}>
                {element.courseName}
              </Link></li>
              <br />
            </>
          );
        })
      );
    }
  }, [order.loaded, order.value]);
  const logoutHandler = () => {
    //add a dispatch to logout :P
    localStorage.clear();
    window.location.href = "/";
  };

  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <>
        <Header />
        <Container className="min-vh-100">
          <Row>
            
            <Col className="bg-light p-3 ps-5">
              <h2>Welcome, {user.firstName} {user.lastName}</h2>
              <br/>
              <h3>{purchase}</h3>
              <br/>
              <p className="">{courseList || "No Course Purchased Yet "}</p>
            </Col>
            <Col sm={{ span: 1 }}>
              <Button onClick={logoutHandler}>Logout</Button>
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
