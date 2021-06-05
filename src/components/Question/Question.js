import React from "react";
import { Form } from "react-bootstrap";
const Question = (props) => {
  return (
    <div>
      <b>Question: {props.quesNo}</b>
      <p>{props.questionText}</p>
      <Form>
        <div key={`default-radio`} className="mb-3">
          <Form.Check
            type="radio"
            name="QuestionOption"
            label={props.optionA}
            value="A"
          />
          <Form.Check
            type="radio"
            name="QuestionOption"
            label={props.optionB}
            value="B"
          />
          <Form.Check
            type="radio"
            name="QuestionOption"
            label={props.optionC}
            value="C"
          />
          <Form.Check
            type="radio"
            name="QuestionOption"
            label={props.optionD}
            value="D"
          />
        </div>
      </Form>
    </div>
  );
};

export default Question;
