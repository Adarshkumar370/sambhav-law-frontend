import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
const DisplayLink = (props) => {
  const clickHandler = () => {
    localStorage.setItem("pdfLink", props.file);
  };
  return (
    <p className="justify"><span>{props.Num} </span>
      <Link
        className={props.classes}
        onClick={clickHandler}
        to="/course/clat/pdf"
      >
        {props.name}
      </Link>
      <br />
      {props.description}
    </p>
  );
};
export const DisplayQuesLink = (props) => {
  return (
    <Col
      className={` p-0 m-2 border ${props.classes}`}
      style={{ borderRadius: "10px" }}
      onClick={(e) => props.onClickHandler(e)}
    >
      <div className="text-center w-100 h-100 p-2 border" style={{cursor: "pointer"}}>{props.quesNumber}</div>
    </Col>
  );
};
export default DisplayLink;
