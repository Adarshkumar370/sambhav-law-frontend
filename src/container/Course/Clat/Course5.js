import React, { useState } from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./style.css";
import Course5pic from "../../../assets/course_5.png";
import { Link } from "react-router-dom";
import DisplayLink from "../../../components/UI/DisplayLink/DisplayLink";
const Course5 = () => {
  const [linkClass, setLinkClass] = useState("");
  return (
    <>
      <Header />
      <Container fluid className="mt-4">
        <Row>
          <Col sm={{ span: 3 }} className="">
            <Image
              src={Course5pic}
              className="img-fluid p-2 img-thumbnail rounded mt-4"
            />
            {/* <span className="mx-auto">
              <Button variant="primary" className=" mt-3 ml-3  w-100 p-2 ">
                {" "}
                Buy Course
              </Button>
            </span> */}
          </Col>
          <Col>
            <h6 className="fw-bold">CLAT</h6>
            <h1 className="mt-3 p-2">3 Case Law Summaries + 2 Mock Tests</h1>
            <p className="justify p-2">
              This package will provide a combination of 3 Landmark Case Law
              summaries that focus on the points important for the CLAT exam and
              2 Free Extensive Mock Papers based on the current pattern.
            </p>
            {/* <span className="mt-5 p-2">
              <b className="price">Price:</b>
              <span className="oldPrice"> ₹999</span>{" "}
              <span className="newPrice">₹699</span>
              <Link to="/buy-course">
                <Button variant="primary" className="m-3 btn-lg ">
                  {" "}
                  Buy Course
                </Button>
              </Link>
            </span>{" "} */}
            <div className="mt-5 p-3">
              <h2>
                <span className="underline">Course Outline</span>
              </h2>

              <p className="justify mt-5">
                Are you worried about how you would perpare your The CLAT PG
                paper. So many case laws, foundational subjects, a confusing
                pattern. How do I manage it? Don’t worry as we bring for you the
                most extensive CLAT PG study package that solves the problem of
                hunting for Important Case Laws online and thinking twice about
                buying costly study packages that don’t include mock tests and
                study materials combined. <br />
                <br />
                This free study package will provide you a glimspe into our
                course material with 3 Case Law Summaries + 2 Mock Tests. <br />
                <br />
                You can buy our CLAT PG 2021 Case Law Digest + Mock Test Series,
                that contains both study material and mock test that will enable
                extensive preparation at your part at the most effective price.
                It contains the best of both worlds with with 25 comprehensive
                case law summaries that are based on the recent landmark cases.
                The summaries emphasize on important points for over which the
                objctive questions can be formed such as:
              </p>

              <ul>
                <li> Related Landmark/Overruled/Referred Cases</li>
                <li> Arguments presented by different Lawyers</li>
                <li>Important ascepts of each judges opinions</li>
                <li>Related/Overruled statutes and amendments</li>
                <li>Important Theories and Observations</li>
              </ul>

              <p className="justify">
                Further it also contains more than 3 Mock Tests with each mock
                test containing 10 passages over which 100 questions are based
                as according to the CLAT PG 2021 paper format.
              </p>
            </div>
            <div>
              <h2>
                <span className="underline">Course Syllabus</span>
              </h2>
            </div>
            <div className="mt-5">
              <h3>
                <b>Law</b>
              </h3>
              <DisplayLink
                name="Jaishri Laxmanrao Patil vs The Chief Minister"
                description="In this case, the court struck down a Maharashtra law providing reservations to the Maratha community in educational institutions and public services by declaring them as educationally and socially backward"
                file="file22"
                classes={linkClass}
              />
              <DisplayLink
                name="Perkins Eastman Architects DPC and Ors. vs. HSCC (India) Ltd"
                description="In this case it was held that a party interested in dispute and outcome of its decision is not eligible to appoint sole arbitrator."
                file="file2"
                classes={linkClass}
              />
              <DisplayLink
                name="Mukesh Singh v. State (Narcotics Branch of Delhi)"
                description="In this case, the court held that there is no automatic apprehension of bias when the informant and the investigating officer (IO) are the same, and such cases will have to be decided on a case-to-case basis."
                file="file4"
                classes={linkClass}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Course5;
