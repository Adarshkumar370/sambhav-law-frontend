import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import CardCustom from "../../components/UI/Card/Card";
import Course2 from "../../assets/course_2.jpg";
import MockPrevious from "../../assets/mock_previous.png";
import Course5 from "../../assets/course_5.jpg";
const MockTest = () => {
  return (
    <>
      <Header />
      <Container fluid className="min-vh-100">
        <Row className="mt-3">
          <h1 className="display-5 fw-bold m-2 p-2">Mock courses </h1>
          <hr />
        </Row>
        <Row className='mt-3 g-3 m-2'>
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <CardCustom
              cardPic={Course2}
              cardTitle="6 Mock Tests (Practice Series 1) "
              cardText="This package provides 6 Extensive Mock Papers based on the latest pattern with each mock test containing 120 question based over 12 passages. These are mock papers are meant for self assessment and the answer key has been provided after every 10 questions."
              originalPrice="₹499"
              newPrice="₹399"
              link="/course/clat/course-2"
              currentStatus="Enroll Now"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <CardCustom
              cardPic={MockPrevious}
              cardTitle="Previous Year CLAT PG Papers"
              cardText="This package contains 6 previous year question papers for the CLAT PG exam. The package contains the following papers: CLAT PG 2015, CLAT PG 2016, CLAT PG 2017, CLAT PG 2018, CLAT PG 2019, CLAT PG 2020. "
              newPrice="Free"
              link="/mock/previous"
              currentStatus="Enroll Now"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
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
      </Container><br/><br/><br/>
      <Footer />
    </>
  );
};

export default MockTest;
