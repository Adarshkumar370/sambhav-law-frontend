import React from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./style.css";
import Course3pic from "../../../assets/course_3.png";
import { Link } from "react-router-dom";
const Course3 = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={{ span: 3 }} className='bg-info'>
            <Image
              src={Course3pic}
              className="img-fluid p-2 img-thumbnail rounded mt-4"
            />
            <span className="mx-auto">
              <Button variant="primary" className=" mt-3 ml-3  w-100 p-2 ">
                {" "}
                Buy Course
              </Button>
            </span>
          </Col>
          <Col>
            <h5>CLAT</h5>
            <h1>25 Case Law Summaries + 3 Mock Tests</h1>
            <p>
              This package will provide summaries of 75+ Recent Landmark cases
              that focuses on points important for CLAT PG exam like Related
              Cases, Key Findings, Relevant Statutes and Amendments.
            </p>
            <span>
              <b className="price">Price:</b>
              <span className="oldPrice"> ₹999</span>{" "}
              <span className="newPrice">₹699</span>
              <Button variant="primary" className="m-3 btn-lg ">
                {" "}
                Buy Course
              </Button>
            </span>{" "}
            <div>
              <h2>
                <u>Course Outline</u>
              </h2>

              <p>
                Looking at the changes in the pattern of the CLAT PG paper in
                2020, it is quite certain that you are required to study recent
                case laws in addition to your foundational subject like
                Constitution, Adminstrative Law, Jurisprudence etc. The
                preperation of the paper is made more harder by the fact that
                the pattern of the paper is now paragraph based, with questions
                related to that very paragraph. It is thereby essential to
                change the way the preparation has to be done. Hence to aid you
                in your endeavour, we have created the CLAT PG 2021 Case Law
                Digest that provides you with more than 75 comprehensive case
                law summaries that are based on the recent landmark cases. The
                summaries emphasize on important points for over which the
                objctive questions can be formed such as:
              </p>

              <ul>
                <li> Related Landmark/Overruled/Referred Cases</li>
                <li> Arguments presented by different Lawyers</li>
                <li>Important ascepts of each judges opinions</li>
                <li>Related/Overruled statutes and amendments</li>
                <li>Important Theories and Observations</li>
              </ul>

              <p>
                Our team is hard at work to complete this package study material
                and we shall be launching it very soon. This study package
                includes more than 75 case law summaries that means that a
                minimum of 75 cases will be included with a maximum of 100 cases
                can be expected.
              </p>
            </div>
            <div>
              <h2>
                <u>Course Syllabus</u>
              </h2>

              <div>
                <h3>
                  <b>Arbitration Law</b>
                </h3>
                <p>
                  Constitutional Validity of Section 87 of the Arbitration and
                  Conciliation Act challenged in SC
                  <br />
                  <Link to="/" className=" d-none">
                    Hindustan Construction Company vs Union of India
                    <br />
                  </Link>
                  Party interested in dispute and outcome of its decision is not
                  eligible to appoint sole arbitrator.
                </p>
              </div>

              <hr />

              <div>
                <h3>
                  <b>Banking Law</b>
                </h3>
                <p>
                  <Link to="/" className=" d-none">
                    Pandurang Ganpati Chaugule vs Vishwasrao Patil Murgud
                    Sahakari
                    <br />
                  </Link>
                  Use of SARFAESI Act, 2000 by Co-operative Banks to recover
                  dues
                </p>
              </div>

              <hr />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Course3;
