import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row} from "react-bootstrap";
import CardCustom from "../../components/UI/Card/Card";
import Course1 from "../../assets/course_1.png";
import Course2 from "../../assets/course_2.png";
import Course3 from "../../assets/course_3.png";
import Course4 from "../../assets/course_4.png";
import Course5 from "../../assets/course_5.png";

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
        <Row className="mt-5 ">
          <Col sm={{ offset: 1 }}>
            <CardCustom
              cardPic={Course1}
              cardTitle="75+ Comprehensive Case Law Summaries"
              cardText="This package will provide summaries of 75+ Recent Landmark cases that focuses on points important for CLAT PG exam like Related Cases, Key Findings, Relevant Statutes and Amendments."
              originalPrice="₹999"
              newPrice="₹699"
              link='/course/notify-me'
              currentStatus='Notify Me'
            />
          </Col>
          <Col>
            <CardCustom
              cardPic={Course2}
              cardTitle="75+ Case Law Summaries + 10+ Mock Tests"
              cardText="This package will provide a combination of 75+ Case Law summaries that focus on the points important for the CLAT exam and 10+ Extensive Mock Papers based on the current Pattern "
              originalPrice="₹1599"
              newPrice="₹999"
              link='/course/notify-me'
              currentStatus='Notify Me'
            />
          </Col>
          <Col>
            <CardCustom
              cardPic={Course3}
              cardTitle="25 Case Law Summaries + 3+ Mock Tests"
              cardText="This package will provide a combination of 25 Landmark Case Law summaries that focus on the points important for the CLAT exam and 3 Extensive Mock Papers based on the current Pattern"
              originalPrice="₹899"
              newPrice="₹499"
              link='/course/clat/course-3'
              currentStatus='Enroll Now'
              
            />
          </Col>
        </Row>
        <Row className=" " style={{ marginTop: "80px" }}>
          <Col sm={{ offset: 1 }}>
            <CardCustom
              cardPic={Course4}
              cardTitle="10+ Mock Tests"
              cardText="This package will provide 10+ Extensive Mock Papers based on the current Pattern of CLAT PG focusing on important paragraphs from recent landmark cases."
              originalPrice="₹1099"
              newPrice="₹599"
              link='/course/notify-me'
              currentStatus='Notify Me'
            />
          </Col>
          <Col>
            <CardCustom
              cardPic={Course5}
              cardTitle="3 Case Law Summaries + 2 Mock Tests"
              cardText="This is a free package that will provide free a summary of 3 Landmark Case Law that focus on the points important for the CLAT exam and 2 Extensive Mock Papers based on the current Pattern"
              originalPrice=""
              newPrice="Free"
              link='/course/clat/course-5'
              currentStatus='Enroll Now'
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Course;
