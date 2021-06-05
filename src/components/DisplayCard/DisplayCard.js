import React from 'react'
import { Container } from 'react-bootstrap';
const DisplayCard = (props) => {
    return (
        <Container fluid>
            
            {props.children}
        </Container>
    )
}

export default DisplayCard
