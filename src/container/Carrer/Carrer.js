import React,{useState} from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/UI/Input/Input';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
const Carrer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [join, setJoin] = useState("");
    const [CV, setCV] = useState("");
    return (
       <>
       <Header />
        <Container fluid>
            <Row>
                <Col><h1 className="display-5 text-center">Apply For Internship</h1></Col>
            </Row>
            <Row className="m-2 p-2" >
                <Col sm={{span:6, offset:3}}>
                <Form >
                    <Input
                    label="Name"
                    placeholder="Name"
                    value={name}
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    /><br/>
                    <Input
                    label="Email"
                    placeholder="Email"
                    value={email}
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    /><br/>
                    <Input
                    label="Mobile Number"
                    placeholder="Mobile Number "
                    value={mobileNo}
                    type='text'
                    onChange={(e) => setMobileNo(e.target.value)}
                    /><br/>
                    <Input
                    label="Preferred Date to Join"
                    placeholder="Preferred Date to Join"
                    value={join}
                    type='date'
                    onChange={(e) => setJoin(e.target.value)}
                    /><br/>
                    <Input
                    label=  "Upload your CV:  &nbsp; &nbsp; &nbsp;"
                    value={CV}
                    type='file'
                    onChange={(e) => setCV(e.target.value)}
                    /><br/>
                    <Button variant="primary" size="lg" type="submit">
                  Submit
                </Button>
                </Form>
                </Col>
            </Row>
        </Container>
       <Footer />

       </>
    )
}

export default Carrer
