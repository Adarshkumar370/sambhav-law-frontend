import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./style.css";
import Course3pic from "../../../assets/course_3.png";
import { Link } from "react-router-dom";
import DisplayLink from "../../../components/UI/DisplayLink/DisplayLink";
const Course2 = () => {
  const [linkClass, setLinkClass] = useState("d-none");
  const [buttons, setButtons] = useState("");
  const course = JSON.parse(localStorage.getItem("purchaseList"));
  useEffect(() => {
    for (const key in course) {
      if (Object.hasOwnProperty.call(course, key)) {
        const element = course[key];
        if (element.courseId === "course-2") {
          setLinkClass("");

          localStorage.setItem("mock-sto", "checkMock");
        }
      }
    }
    if (linkClass === "") setButtons("d-none");
  });

  return (
    <>
      <Header />
      <Container fluid className="mt-4">
        <Row>
          <Col sm={{ span: 3 }} className="">
            <Image
              src={Course3pic}
              className="img-fluid p-2 img-thumbnail rounded mt-4"
            />
            <span className="mx-auto">
              <Button
                variant="primary"
                className={`mt-3 ml-3  w-100 p-2 ${buttons}`}
              >
                {" "}
                Buy Course
              </Button>
            </span>
          </Col>
          <Col>
            <h6 className="fw-bold">CLAT</h6>
            <h1 className="mt-3 p-2">5 Mock Tests (Practice Series 1)</h1>
            <p className="justify p-2">
              This package will provide a combination of 25 Most Important,
              Latest and Landmark Case Law summaries that focus on the most
              important points for the objective portion of the CLAT PG 2021
              exam and 5 Extensive Mock Papers based on the latest CLAT PG 2021
              format with each mock test containing 120 question based over 12
              passages.
            </p>
            <span className={`"mt-5 p-2" ${buttons}`}>
              <b className="price">Price:</b>
              <span className="oldPrice"> ₹899</span>{" "}
              <span className="newPrice">₹499</span>
              <Link to="/buy-course/course3">
                <Button variant="primary" className="m-3 btn-lg ">
                  {" "}
                  Buy Course
                </Button>
              </Link>
            </span>{" "}
            <div className="mt-5 p-3">
              <h2>
                <span className="underline">Course Outline</span>
              </h2>

              <p className="justify mt-5">
                The pattern of the CLAT PG paper changed drastically in 2020
                with the introduction of paragraph based questions that also
                require you to study recent case along with the usual
                foundational subjects. Hence here we are with the most
                affordable Mock Test Series on CLAT PG with more than 5 Mock
                Tests with each mock test containing 120 question based over 12
                passages are based as according to the CLAT PG 2021 paper
                format.
              </p>
              <p>The Questions are based on:</p>
              <ul>
                <li>
                  Subjects provided in the CLAT PG 2021 Syllabus and other
                  important and relevant subjects
                </li>
                <li>Recent Landmark Cases</li>
                <li>Jurisprudence</li>
              </ul>
            </div>
            <div>
              <div className={linkClass}>
                <h3>
                  <b>Mock Test</b>
                </h3>
                <DisplayLink
                  name="Mock Test-1"
                  file="mock1"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Mock Test-2"
                  file="mock2"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Mock Test-3"
                  file="mock3"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Mock Test-4"
                  file="mock4"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Mock Test-5"
                  file="mock5"
                  classes={linkClass}
                />
              </div>
              <div className={linkClass}>
                <h3>
                  <b>Mock Test (Mobile Friendly)</b>
                </h3>
                <Link to="/mock/Mock1">
                  <p>Mock Test-1</p>
                </Link>
                <Link to="/mock/Mock2">
                  <p>Mock Test-2</p>
                </Link>
                <Link to="/mock/Mock3">
                  <p>Mock Test-3</p>
                </Link>
                <Link to="/mock/Mock4">
                  <p>Mock Test-4</p>
                </Link>
                <Link to="/mock/Mock5">
                  <p>Mock Test-5</p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Course2;
