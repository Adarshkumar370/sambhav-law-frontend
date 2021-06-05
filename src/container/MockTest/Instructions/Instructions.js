import { Container ,Row,Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
const Instructions = (props) => {
  
  return (
    <div>
      <Container fluid className='m-2 p-2'>
        <h2 className="p-4 bg-light text-center">Instructions</h2>
        <Row className="p-2 ">
        <Col>
          <h3>General Instructions</h3>
        </Col>
        <ol>
          <li>Total duration of examination is 120 minutes. </li>
          <li>
            The clock will be set at the server. The countdown timer in the top
            right comer of screen will display the remaining time available for
            you to complete the examination When the timer reaches zero, the
            examination will end by itself. You will not be required to end or
            submit your examination.
          </li>
          <li>
            The Question Palette displayed on the right side of screen will show
            the status of each question using one of the following symbols{" "}
          </li>
          <div>
            <br />
            <ul>
              <li>
                <u>You have not visited the question yet.</u>{" "}
                <span className="border border-dark p-2 m-1 bg-light">1</span>
              </li>
              <br />
              <li>
                <u>You have not answered the question.</u>
                <span className="border border-danger p-2 m-2 bg-danger text-light">
                  2
                </span>{" "}
              </li>
              <br />
              <li>
                <u>You have answered the question.</u>
                <span className="border border-success p-2 m-2 bg-success text-light">
                  3
                </span>
              </li>
              <br />
              <li>
                <u>
                  You have NOT answered the question, but have marked the
                  question for review.
                </u>
                <span className="border border-info bg-info p-2 m-2 text-light">
                  4
                </span>
              </li>
              <br />
              <li>
                <u>You have answered the question, but marked it for review.</u>
                <span className="border border-warning p-2 m-2 bg-warning ">
                  5
                </span>
              </li>
            </ul>
            <br />
            The Marked for Review status for a question simply indicates that
            you would like to look at that question again. if a question is
            answered and Marked for Review, your answer for that question will
            be considered in the evaluation.
          </div>
          <br />
          <h5>
            <b>Navigating to a Question </b>
          </h5>
          <li>To answer a question, do the following.</li>
          <ol type="a">
            <li>
              Click on the question number in the Question Palette to go to that
              question directly.{" "}
            </li>
            <li>
              Select an answer for a multiple-choice type question. Use the
              virtual numeric keypad to enter a number as answer for a numerical
              type question.{" "}
            </li>
            <li>
              Click on Save & Next to save your answer for the current question
              and then go to the next question. d. Click on Mark for Review &
              Next to save your answer for the current question, mark it for
              review, and then go to the next question. e. Caution. Note that
              your answer for the current question will not be saved. if you
              navigate to another question directly by clicking on its question
              number{" "}
            </li>
          </ol>
          <li>
            You can view all the questions by clicking on the Question Paper
            button. Note that the options for multiple choice type questions
            will not be shown.{" "}
          </li>
          <br />
          <h5>
            <b>Answering a Question</b>{" "}
          </h5>
          <li>Procedure for answering a multiple-choice type question: </li>
          <ol type="a">
            <li>
              To select your answer, click on the button of one of the options
            </li>
            <li>
              . To deselect your chosen answer, click on the button of the
              chosen option again or click on the Clear Response button{" "}
            </li>
            <li>
              To change your chosen answer, click on the button of another
              option
            </li>
            <li>
              To save your answer, you MUST click on the Save & Next button{" "}
            </li>
            <li>
              To mark the question for review, click on the Mark for Review &
              Next button If an answer is selected for a question that is Marked
              for Review that answer will be considered in the evaluation{" "}
            </li>
          </ol>
          <li>
            To change your answer to a question that has already been answered.
            first select that question for answering and then follow the
            procedure for answering that type of question{" "}
          </li>
          <li>
            Note that ONLY Questions for which answers are saved or marked for
            review after answering will be considered for evaluation
          </li>
        </ol>
      </Row>
      

        <Link to='/mock-test/questions'>
          <div className="d-flex justify-content-center">
          <h3 className="w-50 text-center p-1 border border-primary">I am ready to begin</h3>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Instructions;
