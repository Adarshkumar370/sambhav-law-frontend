import React from "react";
import { Form } from "react-bootstrap";
const Input = (props) => {
  return (
    <Form.Group  className='mt-3'>
      <Form.Label>{props.label}</Form.Label>
      
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.req}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Input;
