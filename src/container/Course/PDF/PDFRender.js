import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
const PDFRender = () => {
    const [temp, settemp] = useState(0);
    useEffect(()=>{
        setTimeout(settemp(1), 1000);
    })
    return (
        <div onContextMenu={(e) => e.preventDefault()}>
        <Header />
        <Container fluid className='min-vh-100'>
            <PDFViewer key={temp}/>
        </Container>
        <Footer/>
        </div>)
}

export default PDFRender
