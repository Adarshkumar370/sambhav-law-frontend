
import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import CardCustom from '../../components/UI/Card/Card';
import Course4 from '../../assets/course_4.png';
const MockTest = () => {
    return (
       <>
       <Header/>
        <Container>
            <Row>
            <h1>Mock courses </h1>
                <Col>
                
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
              cardTitle="2017 question paper"
              cardText="This package will provide 10+ Extensive Mock Papers based on the current Pattern of CLAT PG focusing on important paragraphs from recent landmark cases."
              originalPrice="₹1099"
              newPrice="₹599"
              link='/course/notify-me'
              currentStatus='Notify Me'
            />
                </Col>
            </Row>
        </Container>
       <Footer/>
       </>
    )
}

export default MockTest
