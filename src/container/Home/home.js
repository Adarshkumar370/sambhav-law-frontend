import React from "react";
import Header from "../../components/Header/Header";
import "./style.css";
import { Row, Col, Button, Container, Image } from "react-bootstrap";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
import CardCustom, { YoutubeCard } from "../../components/UI/Card/Card";
import Footer from "../../components/Footer/Footer";
import White_Girl from "../../assets/white_girl.jpg";
import Course1 from "../../assets/course_1.jpg";
import Course2 from "../../assets/course_2.jpg";
import Course3 from "../../assets/course_3.png";
import Course4 from "../../assets/course_4.png";
import Course5 from "../../assets/course_5.jpg";
import Youtube1 from "../../assets/Youtube_4.png";
import Youtube2 from "../../assets/Youtube_2.png";
import Youtube3 from "../../assets/Youtube_1.png";
import Youtube4 from "../../assets/Youtube_3.png";
import Youtube5 from "../../assets/Youtube_7.png";
import Youtube6 from "../../assets/Youtube_5.png";
import Youtube7 from "../../assets/Youtube_6.png";
import Youtube8 from "../../assets/Youtube_9.png";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
const Home = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="mt-2">
          <Col
            className="d-flex align-items-center"
            md={{ span: 5, offset: 2 }}
          >
            <div>
              <h1 className="text-dark" style={{ fontSize: "3.5rem" }}>
                Join us for the most Comprehensive CLAT PG 2021 Preparation
              </h1>
              <p className="mt-4">
                <table>
                  <tr>
                    <td className="p-2">
                      <FiCheckCircle className="green" />
                    </td>
                    <td>Affordable Study Packages for extensive preparation</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <FiCheckCircle className="green" />
                    </td>
                    <td>
                      6+ Mocks Tests based on the Latest Pattern (120 Passage
                      Based Questions)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <FiCheckCircle className="green" />
                    </td>
                    <td>25+ Detailed Case Law Analysis for Quick Revision</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <FiCheckCircle className="green" />
                    </td>
                    <td>
                      A List of most Important landmark cases free with each
                      course*
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <FiCheckCircle className="green" />
                    </td>
                    <td>Free Mock Tests and Study Material</td>
                  </tr>
                </table>
              </p>
              <Link to="/course">
                <Button
                  style={{ backgroundColor: "#000", borderColor: "#000" }}
                  className="text-light m-2"
                  size="lg"
                >
                  Visit Courses
                </Button>
              </Link>
              <Link to="/mock-test">
                <Button variant="danger" size="lg">
                  Visit Mock Test
                </Button>
              </Link>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src={White_Girl} className="w-75 d-none  d-md-block " />
          </Col>
        </Row>
      </Container>
      <DisplayCard className="mt-5">
        <Row className="mt-5">
          <h2 className="display-5">Youtube Playlist</h2>
        </Row>

        <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-3">
          <Col>
            <YoutubeCard
              imgSrc={Youtube1}
              link="https://www.youtube.com/watch?v=Bkoma7IydOE&list=PL4qwMpR723fsyWJYYNKAY_ITuvR12cB53"
            />
          </Col>
          <Col>
            <YoutubeCard
              imgSrc={Youtube2}
              link="https://www.youtube.com/watch?v=YNFRZ1Bp6uw&list=PL4qwMpR723fsWLUvgc3xCS6q_hbjto0Sl"
            />
          </Col>
          <Col>
            <YoutubeCard
              imgSrc={Youtube3}
              link="https://www.youtube.com/watch?v=Bkoma7IydOE&list=PL4qwMpR723fvk7-f1MAkzznP1HXIo0MF8"
            />
          </Col>
          <Col>
            <YoutubeCard
              imgSrc={Youtube4}
              link="https://www.youtube.com/watch?v=ohwEZ7jsX2M&list=PL4qwMpR723fs6KGOIyfpy24a4NtAWQY_E"
            />
          </Col>

          <Col>
            <YoutubeCard
              imgSrc={Youtube5}
              link="https://www.youtube.com/watch?v=hXSnCxlix6M&list=PL4qwMpR723ft6S6bOUdThYUfLl6sUCtiy"
            />
          </Col>
          <Col>
            <YoutubeCard
              imgSrc={Youtube6}
              link="https://www.youtube.com/watch?v=jJ9CJZ5rFMY&list=PL4qwMpR723fuOCzKJSW-UAMWYc46fuIYK"
            />
          </Col>
          <Col>
            <YoutubeCard
              imgSrc={Youtube7}
              link="https://www.youtube.com/watch?v=-oCidFh6iNA&list=PL4qwMpR723fsYQZPPOouYQTsPx88LRGa2"
            />
          </Col>
          <Col>
            <YoutubeCard
              imgSrc={Youtube8}
              link="https://www.youtube.com/watch?v=HolZKQo7F18&list=PL4qwMpR723ft34VDY0JYe82mu3a8QBHLQ"
            />
          </Col>
        </Row>
        <br />
        <hr />
        <Row>
          <h1 className=" display-5 mt-3 ">Courses</h1>
        </Row>
        {/* <Row className="mt-4">
          <Col xs={12} sm={12} md={8} lg={6} xl={3}>
            <CardCustom
              cardPic={Course3}
              cardTitle="25 Case Law Summaries + 5 Mock Tests"
              cardText="This package provides a combination of 25 Most Important, Latest Landmark Case Law summaries that focus on objective portion of the CLAT PG 2021 exam and 5 Extensive Mock Papers with each mock test containing 120 questions based over 12 passages.  "
              originalPrice="₹899"
              newPrice="₹499"
              link="/course/clat/course-3"
              currentStatus="Enroll Now"
            />
          </Col>
          <Col xs={12} sm={12} md={8} lg={4} xl={3}>
            <CardCustom
              cardPic={Course5}
              cardTitle="3 Case Law Summaries + 2 Mock Tests"
              cardText="This is a free package that will provide free a summary of 3 Landmark Case Law that focus on the points important for the CLAT exam and 2 Extensive Mock Papers based on the current Pattern"
              originalPrice=""
              newPrice="Free"
              link="/course/clat/course-5"
              currentStatus="Enroll Now"
            />
          </Col>
        </Row> */}
        <Row className="mt-5 g-3 gy-5 m-2">
          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <CardCustom
              cardPic={Course1}
              cardTitle="25 Case Law Summaries + 6 Mock Tests"
              cardText="This package is a combination of the 25 Comprehensive Case Law Summaries package and the 6 Practice Mock Tests package. It contains 25 Case Law Digest on Latest Landmark Cases for a quick revision and 6 Practice Mock Papers containing 120 passage-based questions."
              originalPrice="₹999"
              newPrice="₹659"
              link="/course/clat/course-1"
              currentStatus="Enroll Now"
            />
          </Col>
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
              cardPic={Course3}
              cardTitle="25 Comprehensive Case Law Summaries (Series 1)"
              cardText="This package will provide summaries of 25 Most Important, Latest and Landmark Case Laws that focuses on points important for CLAT PG exam like Related Cases, Key Findings, Relevant Statutes and Amendments."
              originalPrice="₹599"
              newPrice="₹399"
              link="/course/clat/course-3"
              currentStatus="Enroll Now"
            />
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
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

          <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <CardCustom
              cardPic={Course5}
              cardTitle="All India Mock Test Series (6 Mock Papers) "
              cardText="This package aims to provide a Consolidated Rank by providing an imitation of the actual CLAT exam through 6 mock tests conducted on 5-day intervals. Note: It contains different mock papers from the 6 Practice Mock Test Series."
              newPrice="₹399"
              link="/course/clat/course-5"
              currentStatus="Enroll Now"
              className="mh-100"
            />
          </Col>
        </Row>
      </DisplayCard>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
