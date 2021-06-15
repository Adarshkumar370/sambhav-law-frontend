import React from "react";
import Header from "../../components/Header/Header";
import "./style.css";
import { Row, Col, Button, Container, Image } from "react-bootstrap";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
import CardCustom, { YoutubeCard } from "../../components/UI/Card/Card";
import Footer from "../../components/Footer/Footer";
import White_Girl from "../../assets/white_girl.jpg";
import Course3 from "../../assets/course_3.png";
import Course5 from "../../assets/course_5.png";
import Youtube1 from '../../assets/Youtube_4.png';
import Youtube2 from '../../assets/Youtube_2.png';
import Youtube3 from '../../assets/Youtube_1.png';
import Youtube4 from '../../assets/Youtube_3.png';
import Youtube5 from '../../assets/Youtube_7.png';
import Youtube6 from '../../assets/Youtube_5.png';
import Youtube7 from '../../assets/Youtube_6.png';
import Youtube8 from '../../assets/Youtube_9.png';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="mt-5">
          <Col
            className="d-flex align-items-center"
            md={{ span: 5, offset: 2 }}
          >
            <div>
              <h1 className="text-dark" style={{ fontSize: "3.5rem" }}>
                Join us for the most Comprehensive CLAT PG 2021 Preparation!!
              </h1>
              <p>
                <ul className="mt-4">
                  <li>Affordable Study Package for extensive preparation</li>
                  <li>10+ Mocks Tests on recent Case Laws/ Judgements</li>
                  <li>
                    75+ Case Laws Detailed Analysis tailored according to
                    current CLAT PG Pattern{" "}
                  </li>
                  <li>Last 10 Year Question Papers </li>
                  <li> Free Mock Test and Study Material</li>
                </ul>
              </p>
              <Link to="/course"><Button
                style={{ backgroundColor: "#000", borderColor: "#000" }}
                className="text-light m-2"
              >
                Visit Courses
              </Button></Link>
              <Link to='/mock-test'><Button variant="danger">Visit Mock Test</Button></Link>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image
              className="img-thumbnail rounded"
              src={White_Girl}
              className="w-75"
            />
          </Col>
        </Row>
      </Container>
      <DisplayCard className="mt-5">
        <Row>
          <h2>Youtube Playlist</h2>
        </Row>
        <Row>
          <p>Explore our new Courses</p>
        </Row>
        <Row>
          <Col>
            <YoutubeCard
            imgSrc={Youtube1} 
            link="https://www.youtube.com/watch?v=Bkoma7IydOE&list=PL4qwMpR723fsyWJYYNKAY_ITuvR12cB53"/>
          </Col>
          <Col>
            <YoutubeCard
            imgSrc={Youtube2}
            link="https://www.youtube.com/watch?v=YNFRZ1Bp6uw&list=PL4qwMpR723fsWLUvgc3xCS6q_hbjto0Sl" />
          </Col>
          <Col>
            <YoutubeCard
            imgSrc={Youtube3} 
            link='https://www.youtube.com/watch?v=Bkoma7IydOE&list=PL4qwMpR723fvk7-f1MAkzznP1HXIo0MF8'/>
          </Col>
          <Col>
            <YoutubeCard
            imgSrc={Youtube4}
            link="https://www.youtube.com/watch?v=ohwEZ7jsX2M&list=PL4qwMpR723fs6KGOIyfpy24a4NtAWQY_E" />
          </Col>
          
        </Row>
        <Row className="mt-5">
        <Col>
            <YoutubeCard
            imgSrc={Youtube5} 
            link="https://www.youtube.com/watch?v=hXSnCxlix6M&list=PL4qwMpR723ft6S6bOUdThYUfLl6sUCtiy"/>
          </Col>
          <Col>
            <YoutubeCard
            imgSrc={Youtube6} 
            link="https://www.youtube.com/watch?v=jJ9CJZ5rFMY&list=PL4qwMpR723fuOCzKJSW-UAMWYc46fuIYK"/>
          </Col>
          <Col>
            <YoutubeCard
            imgSrc={Youtube7} 
            link="https://www.youtube.com/watch?v=-oCidFh6iNA&list=PL4qwMpR723fsYQZPPOouYQTsPx88LRGa2"/>
          </Col>
          <Col>
            <YoutubeCard
            imgSrc={Youtube8} 
            link="https://www.youtube.com/watch?v=HolZKQo7F18&list=PL4qwMpR723ft34VDY0JYe82mu3a8QBHLQ"/>
          </Col>
        </Row>
        <br/>
          <hr/>
        <Row >
          
          <h1 className=' display-5 mt-3 '>Courses</h1>
          <Col  className='mt-3'>
            <CardCustom
              cardPic={Course3}
              cardTitle="25 Case Law Summaries + 3+ Mock Tests"
              cardText="This package will provide a combination of 25 Landmark Case Law summaries that focus on the points important for the CLAT exam and 3 Extensive Mock Papers based on the current Pattern"
              originalPrice="₹899"
              newPrice="₹499"
              link="/course/clat/course-3"
              currentStatus="Enroll Now"
            />
          </Col>
          <Col className='mt-3'><CardCustom
              cardPic={Course5}
              cardTitle="3 Case Law Summaries + 2 Mock Tests"
              cardText="This is a free package that will provide free a summary of 3 Landmark Case Law that focus on the points important for the CLAT exam and 2 Extensive Mock Papers based on the current Pattern"
              originalPrice=""
              newPrice="Free"
              link='/course/clat/course-5'
              currentStatus='Enroll Now'
            /></Col>
        </Row>
      </DisplayCard>
        <br/>
        <br/>
        <br/>
        <br/>
      <Footer />
    </>
  );
};

export default Home;
