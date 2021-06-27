import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import CardCustom from "../../components/UI/Card/Card";
import Course1 from "../../assets/course_1.jpg";
import Course2 from "../../assets/course_2.jpg";
import Course3 from "../../assets/course_3.png";
import Course4 from "../../assets/course_4.png";
import Course5 from "../../assets/course_5.jpg";

const Course = () => {
  return (
    <>
      <Header />
      <Container fluid className="mb-5">
        <Row>
          <Col>
            <h1 class="display-5 fw-bold m-2 p-2">Our Courses </h1>
          </Col>
          <hr />
        </Row>
        <Row className="mt-5 g-5 m-2">
          <Col>
            <CardCustom
              cardPic={Course1}
              cardTitle="25 Case Law Summaries + 5 Mock Tests"
              cardText="This package provides a combination of 25 Most Important, Latest Landmark Case Law summaries that focus on objective portion of the CLAT PG 2021 exam and 5 Extensive Mock Papers with each mock test containing 120 questions based over 12 passages."
              originalPrice="₹1099"
              newPrice="₹799"
              link="/course/clat/course-1"
              currentStatus="Enroll Now"
            />
          </Col>
          <Col>
            <CardCustom
              cardPic={Course2}
              cardTitle="5 Mock Tests (Practice Series 1) "
              cardText="This package provides 5 Extensive Mock Papers based on the latest pattern with each mock test containing 120 question based over 12 passages. These are mock papers are meant for self assessment and the answer key has been provided after every 10 questions."
              originalPrice="₹699"
              newPrice="₹449"
              link="/course/clat/course-2"
              currentStatus="Enroll Now"
            />
          </Col>
          <Col>
            <CardCustom
              cardPic={Course3}
              cardTitle="25 Comprehensive Case Law Summaries (Series 1)"
              cardText="This package will provide summaries of 25 Most Important, Latest and Landmark Case Laws that focuses on points important for CLAT PG exam like Related Cases, Key Findings, Relevant Statutes and Amendments."
              originalPrice="₹599"
              newPrice="₹399"
              link="/course/clat/course-3"
              currentStatus="Enroll Now"
            />
          </Col>

          <Col>
            <CardCustom
              cardPic={Course4}
              cardTitle="3 Case Law Summaries + 2 Mock Tests"
              cardText="This free study package will provide you a glimspe into our course material with 3 Case Law Summaries + 2 Mock Tests."
              newPrice="Free"
              link="/course/clat/course-4"
              currentStatus="Enroll Now"
              className="mh-100"
            />
          </Col>

          <Col>
            <CardCustom
              cardPic={Course5}
              cardTitle="All India Mock Test Series (6 Mock Papers) "
              cardText="This mock test series is based upon ALL INDIA CONSOLIDATED RANKING SYSTEM that lets the participants receive a Consolidated Rank after averaging out their marks in each mock paper. They shall also receive a separate Rank for each individual mock paper as well."
              newPrice="₹399"
              link="/course/clat/course-5"
              currentStatus="Enroll Now"
              className="mh-100"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Course;
