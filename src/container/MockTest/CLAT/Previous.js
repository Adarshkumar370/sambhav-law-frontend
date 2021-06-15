import { Col, Container, Image, Row, Button } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import MockPrevious from "../../../assets/mock_previous.png";
import { Link } from "react-router-dom";
import Questions from "../Exam/questions";
const Previous = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={{ span: 3 }} className="">
            <Image
              src={MockPrevious}
              className="img-fluid p-2 img-thumbnail rounded mt-4"
            />
          </Col>
          <Col>
            <h6 className="fw-bold">CLAT</h6>
            <h1 className="mt-3 p-2">Previous Year CLAT PG Papers</h1>
            <p className="justify p-2">
              This package contains 6 previous year question papers for the CLAT
              PG exam. The package contains the following papers: CLAT PG 2015,
              CLAT PG 2016, CLAT PG 2017, CLAT PG 2018, CLAT PG 2019, CLAT PG
              2020. The papers shall be available in two modes First shall be
              practice mode in which you shall have unlimited time to solve the
              paper and second shall be timer mode wherein 2 hours will be given
              to solve the paper. Apart from that, the papers are also available
              in pdf format as well.
            </p>

            <div className="mt-5 p-3">
              <h2>
                <span className="underline">Course Outline</span>
              </h2>
              <Link to="/mock-test/questions/2015" target="_blank">
                {" "}
                <span>CLAT PG 2015</span>{" "}<br/>
              </Link>
              <Link to="/mock-test/questions/2016" target="_blank">
                {" "}
                <span>CLAT PG 2016</span>{" "}
              </Link>
              <br />
              <Link to="/mock-test/questions/2017" target="_blank">
                {" "}
                <span>CLAT PG 2017</span>{" "}
              </Link>
              <br />
              <Link to="/mock-test/questions/2018" target="_blank">
                {" "}
                <span>CLAT PG 2018</span>{" "}
              </Link>
              <br />
              {/* <Link to="/mock-test/questions/2019" target="_blank">
                {" "}
                <span>CLAT PG 2019</span>{" "}
              </Link>
              <br />
              <Link to="/mock-test/questions/2020" target="_blank">
                {" "}
                <span>CLAT PG 2020</span>{" "}
              </Link> */}
              <br />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Previous;
