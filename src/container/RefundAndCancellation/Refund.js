import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
const Refund = () => {
    return (
        <>
        <Header/>
        <Container >
            
        <h2>Cancellations</h2>
        <p>As a general rule, all sales made on Sambhav Law are final and you shall not be entitled to cancel your order once you have received confirmation of the same. Sambhav Law reserves the sole right to cancel any order as per our discretion in case </p>
        <ol>
            <li>we are unable to deliver the order in a satisfactory manner and/ or </li>

            <li>the user tries to take advantage of the system which violates the Terms of Use.</li>
        </ol>
        <h2>Refunds</h2>
        <p>We do not provide refund for any product once the order is confirmed. There is no obligation to provide refund. Each provider reserves the right to offer refunds, discounts or other consideration in select circumstances at its sole discretion.</p>
        <h2>Pricing</h2>
        <p>Pricing of the products rests with the sole discretion of the provider. User has the option of either taking or leaving the product before making a purchase.</p>
        </Container>
        <Footer/>
        </>
    )
}

export default Refund
