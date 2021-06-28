import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SectionPic from "../../assets/balance.png";
import Founder1 from "../../assets/founder1.jpg";
import Founderfather from "../../assets/founder_father.jpg";
import Foundermother from "../../assets/founder_mother.jpg";
import "./style.css";
import Shaila from "../../assets/shaila.png";
import Karina from "../../assets/Karina.jpg";
import Ria from "../../assets/ria.png";
import { UserCard } from "../../components/UI/Card/Card";
import Vidisha from "../../assets/Vidisha.jpg";
const About = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="mt-5 p-2">
          <Col
            className="d-flex align-items-center"
            md={{ offset: 2, span: 4 }}
          >
            <div>
              <h1 className="display-5">What is Sambhav law?</h1>
              <p class="paragraph-2 mt-3">
                Sambhav Law is a premier, multi-platform organization committed
                to helping students enrich their law school journey and pass
                different law entrance examinations such as PCS-J, CLAT-UG/PG,
                AILET UG/PG, DU LL.B./LL.M. enabling them to get enrolled in
                prestigious law schools, government services. We strive to
                exceed expectations and provide a wide host of content such as
                videos on various legal subjects and current legal news along
                with original study materials including study notes, mock tests,
                etc. We also provide detailed legal articles for adding insights
                and novel concepts to the readers' knowledge and legal updates
                on various events and internship opportunities. We take pride in
                ourselves for our approachable, collegial and team-based way of
                working. Join our team through careers.
              </p>
            </div>
          </Col>
          <Col
            className="d-flex  justify-content-start"
            md={{ offset: 0, span: 4 }}
          >
            <img
              alt="balance"
              src={SectionPic}
              className="img-fluid rounded  align-middle "
              style={{ maxHeight: "400px" }}
            />
          </Col>
        </Row>
        <Row className="m-2 mt-5">
          <span className="d-flex justify-content-center">
            <h5 className=" team">Advisory</h5>
          </span>
          <h1 className="text-center">Advisory Board</h1>
          <Col md={{ span: 4, offset: 2 }}>
            <UserCard
              width="22rem"
              imgSrc={Founderfather}
              Title="Anil Kumar Pandey"
              SubTitle="Advocate"
              Text="Anil Kumar Pandey is a panel for various banking organizations  including State Bank of India, Punjab National Bank and Oriental Bank of Commerce with 30+ years of practice in multiple fields of law including Criminal Law, Banking Law, Tax Law and Civil Matters including Property Disputes. He has represented his clients before various judicial forums including various High Courts, Civil Courts, Debt Recovery Tribunal, State Consumer Forum and Real Estate Appellate Tribunal."
            />
          </Col>
          <Col md={{ span: 4 }}>
            <UserCard
              width="22rem"
              imgSrc={Foundermother}
              Title="Madhu Pandey "
              SubTitle="Advocate"
              Text="Madhu Pandey is a Panel Lawyer in various Banking Organizations like Punjab National Bank, Axis Bank and Oriental Bank of Commerce with specialization in Civil Matters including Property Disputes, Title Search, matters under NI Act and Banking matters including cases under SARFAESI Act. With more than 30+ years of experience, she has represented her clients before various judicial forums including various High Courts, Civil Courts and Statutory Tribunals."
            />
          </Col>
        </Row>

        <Row className="m-2 mt-5">
          <span className="d-flex justify-content-center">
            <h5 className=" team">Team</h5>
          </span>
          <h1 className="text-center">Founding Member</h1>
          <Col md={{ span: 4, offset: 2 }}>
            <UserCard
              width="22rem"
              imgSrc={Founder1}
              Title="Tejas Pandey"
              SubTitle="Founder"
              Text="Tejas Pandey is the Founder and Chief Creative Head of Sambhav Law Legal E-Learning Platform. He is also a practicing lawyer at Allahabad High Court, Lucknow Bench, with a practice in Civil and Service Matter Disputes. He is very passionate about his work and believes in having a strong work ethic. He wants to help out other individuals in pursuit of their career goals, which is also one the chief reasons for the creation of this organization. His areas of interests are Constitutional Law, Banking law, Administrative Law."
            />
          </Col>
          <Col md={{ span: 4 }}>
            <UserCard
              width="22rem"
              imgSrc={Shaila}
              Title="Shailendree Diwan "
              SubTitle="Co Founder"
              Text="Shailendree is an enthusiastic Law Graduate from BBAU (Central) University. From day one, she has been working as an apprentice under various start-ups and training under Lawyers. Her interests involve Entrepreneurship, Business laws and Intellectual Property. She strives to give her best in every work she does."
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <span className="d-flex justify-content-center">
            <h5 className=" team">Team</h5>
          </span>
          <h1 className="text-center">Our Team</h1>
          <Col md={{ span: 4, offset: 2 }} >
            <UserCard
              width="22rem"
              imgSrc={Karina}
              Title="Karina Manaf"
              SubTitle="Member"
              Text="Karina is a 4th year BBALLB student of Kristu Jayanti College of Law, Bangalore with experience in drafting, mediation and legal research. She is particularly interested in the areas of Intellectual Property Rights, Tax laws and Contracts and aims to work in these fields. Moreover, she is an avid believer that everybody is presumed innocent, until proven guilty, no matter what the charge is."
            />
          </Col>
          <Col md={{ span: 4 }} >
            <UserCard
              width="22rem"
              imgSrc={Vidisha}
              Title="Vidisha Mishra"
              SubTitle="Member"
              Text="
              Vidisha is a 3rd year law student of KIIT School of Law, Odisha. She has a keen interest in the areas of Constitutional Law and Company Law and aspires to become a Company Secretary."
            />
          </Col>
          <Col md={{ span: 4, offset: 2 }}  >
            <UserCard
              width="22rem"
              imgSrc={Ria}
              Title="Riya Ganguly"
              SubTitle="Member"
              Text="An avid law enthusiast; who is inquisitive and keenly interested in legal research and content writing.
              An ardent learner, flexible enough to mould herself as per the current requisites, thereby maintaing the benchmarks of efficiency and effectiveness. Endurance and tenacity, coupled with diligence have helped her propelled towards my quintessential work array. 
              
              Open to opportunities!"
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default About;
