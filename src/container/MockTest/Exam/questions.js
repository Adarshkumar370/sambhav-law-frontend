import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../../../actions/mockTest.action";
import { useParams } from "react-router-dom";
import { DisplayQuesLink } from "../../../components/UI/DisplayLink/DisplayLink";
const Questions = () => {
  const { handle } = useParams();
  const mock = useSelector((state) => state.mock);

  const [currentQues, setcurrentQues] = useState(0);
  const [quesNo, setquesNo] = useState("");
  const [questionText, setquestionText] = useState("");
  const [optionA, setoptionA] = useState("");
  const [optionB, setoptionB] = useState("");
  const [optionC, setoptionC] = useState("");
  const [optionD, setoptionD] = useState("");
  const [sideBar, setSideBar] = useState(" ");
  const [score, setScore] = useState(0.0);
  const [formKey, setFormKey] = useState(0);
  const [sideKey, setSideKey] = useState(0);

  const questionList = useRef();
  const sideList = useRef();

  const dispatch = useDispatch(); // Loading Questions
  if (!(mock.loading || mock.questionLoaded)) {
    localStorage.removeItem("score");
    localStorage.removeItem("responseSheet");
    localStorage.removeItem("questionSheet");
    dispatch(fetchQuestion(handle));
  }

  useEffect(() => {
    if (mock.questionLoaded) {
      questionList.current = Object.values(mock.docs[0]);
      localStorage.setItem(
        "questionSheet",
        JSON.stringify(questionList.current)
      ); //Parsing the list
      if (sideKey === 0) {
        sideList.current = [];
        sideList.current.length = parseInt(mock.noOfQuestion, 10);
        sideList.current = sideList.current.fill("bg-light");
      } //initilizing the  side bar

      setSideBar(""); // initilizing empty if questions fail to load
      setquesNo(currentQues + 1);
      setquestionText(questionList.current[currentQues].question);
      setoptionA(questionList.current[currentQues].optionA);
      setoptionB(questionList.current[currentQues].optionB);
      setoptionC(questionList.current[currentQues].optionC);
      setoptionD(questionList.current[currentQues].optionD);
    }
  }, [mock.questionLoaded, currentQues]);

  const formHandler = (e) => {
    if (e.target.value) mock.response[currentQues] = e.target.value;  
  };      // recording the option selected 

  const buttonClickHandler = (e) => {
    e.preventDefault();
    setSideKey(sideKey + 1);
    if (e.target.value === "mark") {
      sideList.current[currentQues] = "bg-warning";
      console.log("sideList.current[currentQues]");
      setSideKey(sideKey + 1);
      if (mock.response[currentQues]) {
        if (
          mock.response[currentQues] ===
          questionList.current[currentQues].correctAns
        )
          setScore(score + 1);
        else setScore(score - 0.25);
      }
      setcurrentQues(parseInt(currentQues, 10) + 1);
      setFormKey(formKey + 1);
    }
    if (e.target.value === "clear") {
      sideList.current[currentQues] = "bg-light";
      console.log("sideList.current[currentQues]");
      setSideKey(sideKey + 1);
      setFormKey(formKey + 1);
      mock.response[currentQues] = "";
      console.log("Clear");
    }
    if (e.target.value === "save") {
      if (mock.response[currentQues]) {
        sideList.current[currentQues] = "bg-primary";
        console.log("sideList.current[currentQues]");
        setSideKey(sideKey + 1);
        if (
          mock.response[currentQues] ===
          questionList.current[currentQues].correctAns
        )
          setScore(score + 1);
        else setScore(score - 0.25);
      }
      console.log(score);
      setcurrentQues(parseInt(currentQues, 10) + 1);
      setFormKey(formKey + 1);
    }
    if (e.target.value === "submit") {
      localStorage.setItem("score", score);
      localStorage.setItem("responseSheet", JSON.stringify(mock.response));
      setFormKey(-1);

      window.location.href = "/mock-test/result";
    }
  };
  const sideBarClickHandler = (e) => {
    setcurrentQues(parseInt(e.target.textContent, 10) - 1);
  };

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
              <div>
                <b>Question: {quesNo}</b>
                {/* <p>{questionText}</p> */}
                <p dangerouslySetInnerHTML={{ __html: questionText }} />
                <Form key={formKey} id="question_form" onChange={formHandler}>
                  <div key={`default-radio`} className="mb-3">
                    <Form.Check
                      type="radio"
                      name="QuestionOption"
                      label={optionA}
                      value="A"
                    />
                    <Form.Check
                      type="radio"
                      name="QuestionOption"
                      label={optionB}
                      value="B"
                    />
                    <Form.Check
                      type="radio"
                      name="QuestionOption"
                      label={optionC}
                      value="C"
                    />
                    <Form.Check
                      type="radio"
                      name="QuestionOption"
                      label={optionD}
                      value="D"
                    />
                  </div>
                  <Col
                    className="d-flex justify-content-between"
                    sm={{ span: 10 }}
                  >
                    <Button
                      onClick={buttonClickHandler}
                      value="mark"
                      variant="warning"
                    >
                      Mark for Review & Next
                    </Button>

                    <Button
                      value="clear"
                      onClick={buttonClickHandler}
                      variant="danger"
                    >
                      Clear Response
                    </Button>
                    <Button
                      value="save"
                      onClick={buttonClickHandler}
                      variant="primary"
                    >
                      Save & Next
                    </Button>
                    <Button
                      value="submit"
                      onClick={buttonClickHandler}
                      Variant="primary"
                    >
                      Submit Paper
                    </Button>
                  </Col>
                </Form>
              </div>
            </Row>
          </Col>
          <Col sm={{ span: 4 }}>
            <Row>Time:</Row>
            <Row
              className="overflow-scroll"
              style={{ maxHeight: "80vh" }}
              key={sideKey}
            >
              {sideBar ||
                sideList.current.map((element, index) => {
                  return (
                    <DisplayQuesLink
                      quesNumber={index + 1}
                      onClickHandler={sideBarClickHandler}
                      classes={element}
                    />
                  );
                })}
            </Row>
          </Col>
        </Row>
        <Row className="position-absolute bottom-0 p-3 w-100"></Row>
      </Container>
    </>
  );
};

export default Questions;
