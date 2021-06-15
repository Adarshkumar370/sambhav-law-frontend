import React from "react";
import { Card,  ListGroup, Button } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import { BsFillPersonCheckFill } from "react-icons/bs";
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
            style={{ borderRadius: "50%",width:'300px',height:'300px' }}
            className=" mx-auto d-block   p-1 m-1"
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
      <a href={props.link} target="_blank" rel='noreferrer' > 
      <Card style={{ border: "none",minWidth:'16rem' }} className="w-100">
        <Card.Img src={props.imgSrc} className=" mx-auto d-block w-100" />
      </Card></a>
    </>
  );
};

export const ResultCard=(props)=>{
  return(<Card className='m-3' >
    <Card.Body>
      <Card.Text>{props.questionNo}: {props.question}</Card.Text>
      <Card.Text>A:{' '}{props.optionA}</Card.Text>
      <Card.Text>B: {props.optionB}</Card.Text>
      <Card.Text>C: {props.optionC}</Card.Text>
      <Card.Text>D: {props.optionD}</Card.Text>
      <Card.Text>Correct Ans: {props.correctAns}</Card.Text>
      <Card.Text>Your Response: {props.response}</Card.Text>
    </Card.Body>
  </Card>);
}
export default CardCustom;
