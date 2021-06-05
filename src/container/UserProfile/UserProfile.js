import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import { Col,Row, Container } from 'react-bootstrap';
const UserProfile = () => {
    const user =JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (
        <>
        <Header/>
        <Container>
            <Row>
            <h1>Welcome, {user.firstName}</h1>
                <Col>SideBar

                <h3>My Courses</h3>
                <h3> Mock Test</h3>
                <h3>Results</h3>
                <h3>Logout</h3>
                </Col>
                <Col></Col>
                
            </Row>
        </Container>
        <Footer/>


        </>
    )
}

export default UserProfile
