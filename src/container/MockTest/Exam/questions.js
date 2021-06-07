import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Question from "../../../components/Question/Question";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../../../actions/mockTest.action";
import MockSideBar from "../../../components/SideBar/MockSideBar";

const Questions = () => {
  const mock = useSelector((state) => state.mock);
  const dispatch = useDispatch();
  const [currentQues, setcurrentQues] = useState(0);
  const [quesNo, setquesNo] = useState("");
  const [questionText, setquestionText] = useState("");
  const [optionA, setoptionA] = useState("");
  const [optionB, setoptionB] = useState("");
  const [optionC, setoptionC] = useState("");
  const [optionD, setoptionD] = useState("");
  const [sideBar, setSideBar] = useState("");
  if (!(mock.loading || mock.questionLoaded)) {
    dispatch(fetchQuestion());
  }

  useEffect(() => {
    if (mock.questionLoaded) {
      const questionList = Object.values(mock.docs[0]);
      console.log(questionList[0]);
      var list1 = [];
      list1.length = parseInt(mock.noOfQuestion, 10);
      list1 = list1.fill("bg-danger");
      setquesNo(currentQues + 1);
      setquestionText(questionList[currentQues].question);
      setoptionA(questionList[currentQues].optionA);
      setoptionB(questionList[currentQues].optionB);
      setoptionC(questionList[currentQues].optionC);
      setoptionD(questionList[currentQues].optionD);
      setSideBar(list1);
    }
  }, [mock.questionLoaded]);

  return (
    <>
      <Container
        fluid
        style={{ height: "100vh" }}
        className="position-relative"
      >
        <Row>
          <Col className="text-center"> Sambhav Law Mock Test</Col>
        </Row>
        <Row>
          <Col sm={{ span: 8 }}>
            <Row>Section</Row>
            <Row>
              <Question
                quesNo={quesNo}
                questionText={questionText}
                optionA={optionA}
                optionB={optionB}
                optionC={optionC}
                optionD={optionD}
              />
            </Row>
          </Col>
          <Col sm={{ span: 4 }}>
            <Row>Time</Row>
            <Row className='overflow-scroll' style={{maxHeight:'80vh'}}>
              <MockSideBar list={sideBar} />
            </Row>
          </Col>
        </Row>
        <Row className="position-absolute bottom-0 p-3 w-100">
          <Col className="d-flex justify-content-between" sm={{ span: 10 }}>
            <Button variant="warning">Mark for Review & Next</Button>
            <Button variant="danger">Clear Response</Button>
            <Button variant="primary">Save & Next</Button>
            <Button Variant="primary">Submit Paper</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Questions;
