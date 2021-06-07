import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
const PDFRender = () => {
    return (
        <div onContextMenu={(e) => e.preventDefault()}>
        <Header />
        <Container fluid>
            <PDFViewer/>
        </Container>
        <Footer/>
        </div>)
}

export default PDFRender
