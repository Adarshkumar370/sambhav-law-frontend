import React,{useState} from "react";
import { Form } from "react-bootstrap";
const Question = (props) => {

const [optionSelected, setOptionSelected] = useState("");
  const formHandler=() =>{

  }
  return (
    <div>
      <b>Question: {props.quesNo}</b>
      <p>{props.questionText}</p>
      <Form onChange={formHandler()}>
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
