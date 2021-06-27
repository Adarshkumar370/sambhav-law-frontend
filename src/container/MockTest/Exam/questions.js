import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row, Button, Form, Alert } from "react-bootstrap";
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

  const [formKey, setFormKey] = useState(0);
  const [sideKey, setSideKey] = useState(0);
  const [opA, setopA] = useState(false);
  const [opB, setopB] = useState(false);
  const [opC, setopC] = useState(false);
  const [opD, setopD] = useState(false);
  const [error, setError] = useState(null);
  const questionList = useRef();
  const sideList = useRef();
  const score = useRef(parseFloat(0, 10));
  var optionSelected = null;
  const dispatch = useDispatch(); // Loading Questions
 useEffect(()=>{
  if (!(mock.loading || mock.questionLoaded)) {
    localStorage.removeItem("score");
    localStorage.removeItem("responseSheet");
    localStorage.removeItem("questionSheet");
    dispatch(fetchQuestion(handle));
  }

 },[mock.loading])
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
      setopA(null);
      setopB(null);
      setopC(null);
      setopD(null);
      setError(null);
      if (!mock.response[currentQues]) {
        sideList.current[currentQues] = "bg-danger";
      }
    }
  }, [mock.questionLoaded, currentQues]);

  const formHandler = (e) => {
    if (e.target.value) optionSelected = e.target.value;
  }; // recording the option selected

  const sideBarClickHandler = (e) => {
    setcurrentQues(parseInt(e.target.textContent, 10) - 1);
    setFormKey(formKey + 1);
  };
  useEffect(() => {
    switch (mock.response[currentQues]) {
      case "A":
        setopA("text-primary bg-light border border-dark border-3");
        break;
      case "B":
        setopB("text-primary bg-light border border-dark border-3");
        break;
      case "C":
        setopC("text-primary bg-light border border-dark border-3");
        break;
      case "D":
        setopD("text-primary bg-light border border-dark border-3");
        break;
      default:
        console.log("default ");
    }
  }, [formKey]);

  const buttonClickHandler = (e) => {
    e.preventDefault();

    switch (e.target.value) {
      case "mark":
        sideList.current[currentQues] = "bg-warning";
        if (optionSelected) {
          mock.response[currentQues] = optionSelected;
        }
        setcurrentQues(parseInt(currentQues, 10) + 1);
        setFormKey(formKey + 1);
        break;
      case "clear":
        sideList.current[currentQues] = "bg-danger";
        mock.response[currentQues] = null;
        setopA(null);
        setopB(null);
        setopC(null);
        setopD(null);
        break;
      case "save":
        if (optionSelected) {
          mock.response[currentQues] = optionSelected;
          
          sideList.current[currentQues] = "bg-primary";
        }
          setcurrentQues(parseInt(currentQues, 10) + 1);
          setFormKey(formKey + 1);
        break;
      case "submit":
        Object.entries(mock.response).forEach(([key, value]) => {
          if (value === questionList.current[key].correctAns)
            score.current = parseFloat(score.current, 10) + 1;
          else score.current = parseFloat(score.current, 10) - 0.25;
        });
        console.log(score.current);
        localStorage.setItem("score", score.current);
        localStorage.setItem("responseSheet", JSON.stringify(mock.response));
        window.location.href = "/mock-test/result";
        break;
      default:
        console.log("default");
    }

    setSideKey(sideKey + 1);
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
                      className={opA}
                    />
                    <Form.Check
                      type="radio"
                      name="QuestionOption"
                      label={optionB}
                      value="B"
                      className={opB}
                    />
                    <Form.Check
                      type="radio"
                      name="QuestionOption"
                      label={optionC}
                      value="C"
                      className={opC}
                    />
                    <Form.Check
                      type="radio"
                      name="QuestionOption"
                      label={optionD}
                      value="D"
                      className={opD}
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
                      className='text-dark'
                    >
                      Clear Response
                    </Button>
                    <Button
                      value="save"
                      onClick={buttonClickHandler}
                      variant="primary"
                      className='text-dark'
                    >
                      Save & Next
                    </Button>
                    <Button
                      value="submit"
                      onClick={buttonClickHandler}
                      Variant="primary"
                      className='text-dark'
                    >
                      Submit Paper
                    </Button>
                  </Col>
                </Form>
              </div>
            </Row>
            <p className=" bg-danger m-3 text-center">{error}</p>
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
