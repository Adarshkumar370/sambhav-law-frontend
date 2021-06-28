import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";
import { pdfjs } from "react-pdf";
import axios from "../../helper/axios";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const [file1, setfile] = useState("");
  const [gotoPage, setgotoPage] = useState("1");
  
  const fileName=localStorage.getItem("pdfLink");
  console.log(fileName);
  useEffect(() => {
    if (!file1) {
      axios
        .post(
          "/file",
          { fileName: fileName || "file1" },
          {
            responseType: "arraybuffer",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/pdf",
            },
          }
        )
        .then((res) => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          console.log(url);
          setfile(url);
        });
    }

    if (parseInt(gotoPage) <= numPages && parseInt(gotoPage) >= 1)
      setPageNumber(parseInt(gotoPage));
  }, [file1, gotoPage]);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const firstHandler = () => {
    setPageNumber(1);
    setgotoPage(1);
  };
  const prevHandler = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setgotoPage(pageNumber - 1);
    }
  };
  const nextHandler = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
      setgotoPage(pageNumber + 1);
    }
  };
  const lastHandler = () => {
    setPageNumber(numPages);
    setgotoPage(numPages);
  };
 
  return (
    <>
      <Container fluid>
        <Row className="mt-3 m-2">
          <Col
            className="d-flex justify-content-evenly"
            sm={{ span: 4, offset: 4 }}
          >
            <Button size="lg" variant="light" onClick={firstHandler}>
              <MdSkipPrevious />
            </Button>
            <Button size="lg" variant="light" onClick={prevHandler}>
              <GrPrevious />
            </Button>
            <span className="d-inline-flex justify-content-center align-items-center">
              {" "}
              Page{" "}
              <Form.Control
                type="text"
                className="w-25 m-1"
                value={gotoPage}
                onChange={(e) => {
                  setgotoPage(e.target.value);
                }}
              />{" "}
              of {numPages}
            </span>
            <Button size="lg" variant="light" onClick={nextHandler}>
              <GrNext />
            </Button>
            <Button size="lg" variant="light" onClick={lastHandler}>
              <MdSkipNext />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col
            className=" m-3 d-flex justify-content-center"
            style={{ userSelect: "none" }}
          >
            <Document
              file={file1}
              noData="Loading File Please Wait"
              onLoadSuccess={onDocumentLoadSuccess}
              className="pdf-container"
              
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default PDFViewer;
