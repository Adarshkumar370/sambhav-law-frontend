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
      <Container fluid className="w-100">
        <Row>
          <Col>
            <h1 class="display-5 fw-bold m-2 p-2">Our Courses </h1>
          </Col>
          <hr />
          <p className='m-3 p-3'>
            In case of any doubts regarding our courses, refer to the FAQs by
            scrolling down on this page.
          </p>
        </Row>
        <Row className="mt-5 g-3 m-2 gy-5">
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
        <br />
        <Row>
          <h2>
            <span className="underline m-2 mt-5">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="mt-4 m-2 p-3 mb-5 me-5">
            <li className='mt-4'>
              <b>
                Are the Case Summaries and Mock Tests provided in the{" "}
                <span className="text-primary">
                  25 Case Law Summaries + 6 Mock Tests Package{" "}
                </span>{" "}
                similar to the{" "}
                <span className="text-primary">
                  6 Mock Tests (Practice Series 1) Package{" "}
                </span>{" "}
                and{" "}
                <span className="text-primary">
                  25 Comprehensive Case Law Summaries (Series 1) Package
                </span>
                ?
              </b>
            </li>
            <p className='mt-2'>
              The 25 Case Law Summaries + 6 Mock Tests Package is a combination
              of the 25 Comprehensive Case Law Summaries package and the 6
              Practice Mock Tests package, provided as BUNDLE PACK on a
              discounted price.
            </p>
            <li className='mt-4'>
              <b>
                Are the Mock Tests present in{" "}
                <span className="text-primary">
                  6 Mock Tests (Practice Series 1)
                </span>
                Package similar to the{" "}
                <span className="text-primary">
                  All India Mock Test Series (6 Mock Papers)
                </span>{" "}
                Package?
              </b>
            </li>
            <p className='mt-2'>
              No, the mock papers present in the 6 Mock Tests (Practice Series
              1) are totally different from the All India Mock Test Series (6
              Mock Papers) Package.
            </p>
            <li className='mt-4'>
              <b>
                What is the nature of the mock tests present in the{" "}
                <span className="text-primary">
                  6 Mock Tests (Practice Series 1)
                </span>{" "}
                and the{" "}
                <span className="text-primary">
                  All India Mock Test Series (6 Mock Papers)
                </span>{" "}
                Package?
              </b>
            </li>
            <p className='mt-2'>
              The mock tests provided in the 6 Mock Tests (Practice Series 1)
              Package are available on the website for self-evaluation whereas
              the mock papers available in the All-India Mock Test Series (6
              Mock Papers) Package are to held on 5-day intervals starting from
              25th June, 2021 onwards. Ranking for all the mock tests held shall
              be provided using separate test links, including for the papers
              already conducted before registration.
            </p>
          </div>
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Course;
