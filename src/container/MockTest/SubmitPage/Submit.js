import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { ResultCard } from "../../../components/UI/Card/Card";

const Submit = () => {
  const score = localStorage.getItem("score");
  const response = JSON.parse(localStorage.getItem("responseSheet"));
  const questionSheet = JSON.parse(localStorage.getItem("questionSheet"));
  console.log(questionSheet);
  return (
    <>
      <Header />
      <Container bg="warning">
        <Row>
          <h1>Result</h1>
          <h2>Your Score: {score}</h2>
          <Col>
            {questionSheet.map((element, index) => {
              return (
                <ResultCard
                  questionNo={index + 1}
                  question={element.question}
                  optionA={element.optionA}
                  optionB={element.optionB}
                  optionC={element.optionC}
                  optionD={element.optionD}
                  correctAns={element.correctAns}
                  response={response[index]}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Submit;
