import React from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import { BsFillPersonCheckFill } from "react-icons/bs";
import yy1 from "../../../assets/sabrimala.jpg";
const CardCustom = (props) => {
  return (
    <Card style={{ width: "25rem", borderRadius: "15px" }} className="cardFull">
      <Card.Img
        style={{ borderRadius: "15px 15px 0px 0px" }}
        variant="top"
        src={props.cardPic}
      />
      <Card.Body>
        <Card.Title className="cardTitle">{props.cardTitle}</Card.Title>
        <Card.Text className="cardText">{props.cardText}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* <ListGroupItem>Cras justo odio</ListGroupItem> */}
        {props.listGroupItems}
      </ListGroup>
      <Card.Body>
        {/* <span>{props.cardPrice}</span> */}
        <span>
          <b className="price">Price:</b>
          <span className="oldPrice"> {props.originalPrice}</span>{" "}
          <span className="newPrice">{props.newPrice}</span>
        </span>
      </Card.Body>
      <Link to={props.link} className="text-decoration-none text-reset ">
        <Button
          variant="dark"
          className="enrollbtn w-100"
          size="lg"
          style={{ borderRadius: "0px 0px 15px 15px" }}
        >
          <span>
            <BsFillPersonCheckFill /> {props.currentStatus}
          </span>
        </Button>
      </Link>
      {/* <Button  variant='dark' className='enrollbtn' size="lg" style={{borderRadius:'0px 0px 15px 15px'}}><Link to={props.link} className='text-decoration-none text-reset w-100'><span><BsFillPersonCheckFill/>{' '}Enroll Now</span></Link></Button> */}
    </Card>
  );
};

export const UserCard = (props) => {
  return (
    <>
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Img
            src={props.imgSrc}
            style={{ borderRadius: "50%" }}
            className=" mx-auto d-block w-75 h-75 p-1 m-1"
          />
          <Card.Title className="text-center">{props.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-center text-muted">
            {props.SubTitle}
          </Card.Subtitle>
          <Card.Text className="text-center fs-6 fw-normal">
            {props.Text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export const YoutubeCard = (props) => {
  return (
    <>
      <Card style={{ border: "none" }} className="w-100">
        <Card.Img src={yy1} className=" mx-auto d-block w-100" />
      </Card>
    </>
  );
};
export default CardCustom;
