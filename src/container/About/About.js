import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SectionPic from "../../assets/balance.jpg";
import Founder1 from "../../assets/founder1.jpg";
import "./style.css";
import Shaila from '../../assets/shaila.png';
import Ria from '../../assets/ria.png';
import { UserCard } from "../../components/UI/Card/Card";
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
              <h1 className='display-5'>What is Sambhav law</h1>
              <p class="paragraph-2 " >
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
              className="img-fluid rounded img-thumbnail align-middle "
            />
          </Col>
        </Row>
        <Row className="m-2 mt-5">
          <span className='d-flex justify-content-center'><h5 className=" team">Team</h5></span>
          <h1 className="text-center">Founding Member</h1>
          <Col md={{span:4,offset:2}}>
            <UserCard
              width="22rem"
              imgSrc={Founder1}
              Title="Tejas Pandey"
              SubTitle="Co Founder"
              Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus porta dolor in placerat. Donec fermentum facilisis dolor, ac commodo mauris tincidunt ut. Sed ultrices. "
            />
          </Col>
          <Col md={{span:4}}>
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
        <span className='d-flex justify-content-center'><h5 className=" team">Team</h5></span>
          <h1 className="text-center">Our Team</h1>
          <Col sm={{span:4,offset:4}}>
            <UserCard
              width="22rem"
              imgSrc={Ria}
              Title="Ria Ganguly"
              SubTitle="Member"
              Text="An avid law enthusiast; who is inquisitive and keenly interested in legal research and content writing.
              An ardent learner, flexible enough to mould herself as per the current requisites, thereby maintaing the benchmarks of efficiency and effectiveness. Endurance and tenacity, coupled with diligence have helped her propelled towards my quintessential work array. 
              
              Open to opportunities!"
            />
          </Col>
          
        </Row>
        <br/>
        <br/>
        <br/>
      </Container>
      <Footer />
    </>
  );
};

export default About;
