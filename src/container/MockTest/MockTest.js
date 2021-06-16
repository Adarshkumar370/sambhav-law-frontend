import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import CardCustom from "../../components/UI/Card/Card";
import Course4 from "../../assets/course_4.png";
import MockPrevious from "../../assets/mock_previous.png";
const MockTest = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <h1>Mock courses </h1>
          <Col>
            <CardCustom
              cardPic={Course4}
              cardTitle="10 Mock Tests"
              cardText="This package will provide 10+ Extensive Mock Papers based on the current Pattern of CLAT PG focusing on important paragraphs from recent landmark cases."
              originalPrice="₹1099"
              newPrice="₹599"
              link="/course/notify-me"
              currentStatus="Notify Me"
            />
          </Col>
          <Col>
            <CardCustom
              cardPic={MockPrevious}
              cardTitle="Previous Year CLAT PG Papers"
              cardText="This package contains 6 previous year question papers for the CLAT PG exam. The package contains the following papers: CLAT PG 2015, CLAT PG 2016, CLAT PG 2017, CLAT PG 2018, CLAT PG 2019, CLAT PG 2020. "
              newPrice="Free"
              link="/mock/previous"
              currentStatus="Enroll Now"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MockTest;
