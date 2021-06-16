import React, { useState } from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./style.css";
import Course3pic from "../../../assets/course_3.png";
import { Link } from "react-router-dom";
import DisplayLink from "../../../components/UI/DisplayLink/DisplayLink";
const Course3 = () => {
  const [linkClass, setLinkClass] = useState("");
  return (
    <>
      <Header />
      <Container fluid className='mt-4'>
        <Row>
          <Col sm={{ span: 3 }} className="">
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
            <h6 className="fw-bold">CLAT</h6>
            <h1 className='mt-3 p-2'>25 Case Law Summaries + 3 Mock Tests</h1>
            <p className='justify p-2'>
              This package will provide a combination of 25 Landmark Case Law
              summaries that focus on the points important for the CLAT exam and
              3 Extensive Mock Papers based on the current pattern.
            </p>
            <span className='mt-5 p-2'>
              <b className="price">Price:</b>
              <span className="oldPrice"> ₹999</span>{" "}
              <span className="newPrice">₹699</span>
              <Link to='/buy-course'><Button variant="primary" className="m-3 btn-lg ">
                {" "}
                Buy Course
              </Button></Link>
            </span>{" "}
            <div  className='mt-5 p-3'>
              <h2 >
                <span className='underline'>Course Outline</span>
              </h2>

              <p className="justify mt-5">
                Are you worried about how you would perpare your CLAT PG
                paper. So many case laws, foundational subjects, a confusing
                pattern. How do I manage it? Don’t worry as we bring for you the
                most extensive CLAT PG study package that solves the problem of
                hunting for important case laws online and thinking twice about
                buying costly study packages that don’t include mock tests and
                study materials combined. This study package contains both study
                material and mock test that will enable extensive preparation at
                your part at the most effective price. It contains the best of
                both worlds with with 25 comprehensive case law summaries that
                are based on the recent landmark cases. The summaries emphasize
                on important points for over which the objctive questions can be
                formed such as:
              </p>

              <ul>
                <li> Related Landmark/Overruled/Referred Cases</li>
                <li> Arguments presented by different Lawyers</li>
                <li>Important ascepts of each judges opinions</li>
                <li>Related/Overruled statutes and amendments</li>
                <li>Important Theories and Observations</li>
              </ul>

              <p className='justify'>
                Further it also contains more than 3 Mock Tests with each mock
                test containing 10 passages over which 100 questions are based
                as according to the CLAT PG 2021 paper format.
              </p>
            </div>
            <div >
              <h2>
                <span className='underline'>Course Syllabus</span>
              </h2>

              <div className='mt-5'>
                <h3>
                  <b>Arbitration Law</b>
                </h3>
                <DisplayLink
                  name="Hindustan Construction Company vs UOI"
                  description="In this case the constitutional validity of Section 87 of the Arbitration and Conciliation Act challenged in Supreme Court"
                  file="file1"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Perkins Eastman Architects DPC and Ors. vs. HSCC (India) Ltd."
                  description="In this case it was held that a party interested in dispute and outcome of its decision is not eligible to appoint sole arbitrator."
                  file="file2"
                  classes={linkClass}
                />
              </div>

              <hr />

              <div>
                <h3>
                  <b>Banking Law</b>
                </h3>
                <DisplayLink
                  name="Pandurang Ganpati Chaugule vs Vishwasrao Patil Murgud Sahakari "
                  description="In this case, the court allowed the use of SARFAESI Act, 2000 by Co-operative Banks to recover dues"
                  file="file3"
                  classes={linkClass}
                />
              </div>

              <hr />

              <div>
                <h3>
                  <b>Criminal Law</b>
                </h3>
                <DisplayLink
                  name="Mukesh Singh v. State (Narcotics Branch of Delhi)"
                  description="In this case, the court held that there is no automatic apprehension of bias when the informant and the investigating officer (IO) are the same, and such cases will have to be decided on a case-to-case basis."
                  file="file4"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Pawan Kumar Gupta vs State of NCT Delhi"
                  description="In this case, the Supreme Court dismissed plea of juvenility taken by death row convict "
                  file="file5"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Prathvi Raj Chauhan vs Union of India"
                  description="In this case, the constitutional validity of section 18-A of “The Scheduled Caste and Scheduled Tribes (Prevention of Atrocities) Amendment Act, 2018” was challenged"
                  file="file6"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Sushila Aggarwal and Ors. vs State (NCT of Delhi) & Anr."
                  description="In this case the court held that the pre-arrest bail granted under Section 438 of Cr.P.C. 1973 does not have to be time bound."
                  file="file7"
                  classes={linkClass}
                />
              </div>

              <hr />

              <div>
                <h3>
                  <b>Family Law</b>
                </h3>
                <DisplayLink
                  name="Vineeta Sharma vs. Rakesh Sharma"
                  description="In this case, the court held that the right conferred on a daughter in the coparcenary property is by birth and it is not necessary that the father be alive as on 09.09.2005."
                  file="file8"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Shayara Bano vs Union of India"
                  description="In this case, the court held that the right to Privacy is a fundamental right under Articles 14, 19 and 21 of the Indian Constitution"
                  file="file9"
                  classes={linkClass}
                />
              </div>

              <hr />
              <div>
                <h3>
                  <b>Law relating to Religion</b>
                </h3>
                <DisplayLink
                  name="Indian Young Lawyers’ Association v. State of Kerala"
                  description="In this case, the court held that the custom of the Sabarimala Temple of prohibiting women in their 'menstruating years' from entering declared unconstitutional"
                  file="file10"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Kantaru Rajeevaru v. Indian Young Lawyers Association"
                  description="This case is also known as the Sabarimala Review Petition, addresses the legal issue as to whether the Supreme Court should refer cases for appeal to a larger bench, pertaining to the questioning of law"
                  file="file11"
                  classes={linkClass}
                />
                <DisplayLink
                  name="M Siddiq (D) Through Lrs vs Mahant Suresh Das & Ors."
                  description="In this case, the Allahabad High Court’s decision to split the title of Babri Masjid/Ram Janmabhoomi site was overturned and Shri Ram Virajman was given the title."
                  file="file12"
                  classes={linkClass}
                />
              </div>

              <hr />
              <div>
                <h3>
                  <b>Land Law</b>
                </h3>
                <DisplayLink
                  name="Indore Development Authority vs Manoharlal & Ors."
                  description="This case is related to the interpretation of Section 24 of the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 w.r.t. twin conditions of payment of compensation and possession of the land."
                  file="file13"
                  classes={linkClass}
                />
              </div>

              <hr />
              <div>
                <h3>
                  <b>Privacy Law</b>
                </h3>
                <DisplayLink
                  name="Common Cause 'A' Registered Society vs. Union of India"
                  description="In this case, the court held that the right to life with dignity under Article 21 includes a right to die with dignity"
                  file="file14"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Joseph Shine vs. Union of India"
                  description="In this case, the Supreme court struck down Section 497 of the Indian Penal Code"
                  file="file15"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Justice K.S. Puttaswamy (I) vs Union of India "
                  description="In this case, the court held that the right to Privacy is a fundamental right under Articles 14, 19 and 21 of the Indian Constitution"
                  file="file16"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Navtej Singh Johar v Union of India"
                  description="In this case, the Supreme Court unanimously struck down Section 377 of the IPC, to the extent that it criminalised same-sex relations between consenting adults"
                  file="file17"
                  classes={linkClass}
                />
              </div>

              <hr />
              <div>
                <h3>
                  <b>Recent Case Laws</b>
                </h3>
                <DisplayLink
                  name="Arnab Manoranjan Goswami v. The State Of Maharashtra"
                  description="In this case, the court directed the release of Arnab Goswami on bail pending the disposal of the proceedings before the High Court with some required operative directions"
                  file="file18"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Rajeev Suri v. Delhi Development Authority"
                  description="In this case, the court gave a green light given to the redevelopment plan of New Delhi’s Central Vista"
                  file="file19"
                  classes={linkClass}
                />
              </div>

              <hr />
              <div>
                <h3>
                  <b>Right to Information</b>
                </h3>
                <DisplayLink
                  name="Central Public Information Officer, Supreme Court of India vs Subhash Chandra Agarwal"
                  description="In this case, the court held that the CJI is a public authority under the Right to Information Act"
                  file="file20"
                  classes={linkClass}
                />
              </div>

              <hr />
              <div>
                <h3>
                  <b>Reservation/ Service Law</b>
                </h3>
                <DisplayLink
                  name="Chebrolu Leela Prasad Rao vs State Of A.P."
                  description="In this case, a GOM providing 100% reservation to teachers in the schools of Andhra Pradesh declared invalid"
                  file="file21"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Jaishri Laxmanrao Patil vs The Chief Minister"
                  description="In this case, the court struck down a Maharashtra law providing reservations to the Maratha community in educational institutions and public services by declaring them as educationally and socially backward"
                  file="file22"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Jarnail Singh & Ors vs. Lacchmi Narain Gupta & Ors."
                  description="In this case, the Supreme Court delivered its verdict on the topic of Reservation in Promotion."
                  file="file23"
                  classes={linkClass}
                />
                <DisplayLink
                  name="State of Punjab vs Davinder Singh"
                  description="In this case, Section 4(5) of the Punjab Schedule Castes and backward class (Reservation in Services) Act, 2006 was held constitutionally valid and referred to the E.V. Chinnaiah case to a larger bench."
                  file="file24"
                  classes={linkClass}
                />
                <DisplayLink
                  name="Mukesh Kumar vs State of Uttarakhand "
                  description="In this case, the Supreme Court held the vacancies not to be filled by state governments, according to SCs, STs and OBCs reservations laws and declined to order the Uttarakhand state government to give public workers preference while filling vacancies."
                  file="file25"
                  classes={linkClass}
                />
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
