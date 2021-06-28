import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./style.css";
import Course5pic from "../../../assets/course_5.jpg";
const Course5 = () => {
  const clickHandler = () => {
    window.location =
      "https://docs.google.com/forms/d/e/1FAIpQLSfe5NNBFGE-ohkYQW3HqEAan0gO_1ar4TlDJF_IidsFZHRZdQ/viewform";
  };
  return (
    <>
      <Header />
      <Container fluid className="mt-4">
        <Row>
          <Col sm={{ span: 3 }} className="">
            <Image
              src={Course5pic}
              className="img-fluid p-2 img-thumbnail rounded mt-4"
            />
            <span className="mx-auto">
              <Button
                variant="primary"
                className={`mt-3 ml-3  w-100 p-2 `}
                onClick={clickHandler}
              >
                {" "}
                Buy Course
              </Button>
            </span>
          </Col>
          <Col>
            <h6 className="fw-bold">CLAT</h6>
            <h1 className="mt-3 p-2">
              All India Mock Test Series (6 Mock Papers){" "}
            </h1>
            <p className="justify p-2">
              This mock test series is based upon an ALL INDIA CONSOLIDATED
              RANKING SYSTEM which means that the participants shall be provided
              with a Consolidated Rank after averaging out their marks in each
              mock paper. They shall also be provided a separate Rank for each
              individual mock paper as well.
            </p>
            <Button
                variant="primary"
                className="m-3 btn-lg "
                onClick={clickHandler}
              >
                {" "}
                Buy Course
              </Button>
            <div className="mt-5 p-3">
              <h2>
                <span className="underline">REGISTRATION DETAILS:</span>
              </h2>

              <ol className="mt-4">
                <li>
                  {" "}
                  The registration for the mock test series shall remain open
                  till 20th July, 2021.{" "}
                </li>
                <li>
                  {" "}
                  If the registration is done after any of the mock test have
                  already happened, the participant WILL BE PROVIDED a link to
                  attempt the ALL THE PREVIOUS MOCK PAPERS that were conducted
                  before the registration, enabling them to receive a
                  CONSOLIDATED RANK.
                </li>
                <li>
                  After the registration is complete, the participant shall
                  receive a CONFIRMATION EMAIL, confirming their registration
                  along with the link of a Telegram Group, that has to be joined
                  for all the updates regarding the mock test.
                </li>
              </ol>
              <h2>
                <span className="underline">PAYMENT DETAILS:</span>
              </h2>
              <ol className="mt-4">
                <li>
                  The cost for the MOCK TEST Series is ₹399/- for 6 Mock Papers.{" "}
                </li>
                <li>
                  The payment for the same can be done using the QR Code or the
                  upi ID provided with this Registration Form.{" "}
                </li>
                <li>
                  The screenshot showing the completion of the payment has to
                  attached with the form.
                </li>
              </ol>
              <h2>
                <span className="underline">FORMAT OF THE PAPER:</span>
              </h2>
              <ol className="mt-4">
                <li>
                  This mock test series shall be based on the latest CLAT PG
                  2021 pattern consisting of 120 questions based on 12
                  Paragraphs with each para having 10 questions. The total paper
                  is of 120 marks.{" "}
                </li>
                <li>
                  The mock tests shall be conducted at regular intervals of 5
                  days. Dates for the same shall be:
                  <br /> 1st Mock: 25th June, 2021
                  <br /> 2nd Mock: 30th June, 2021
                  <br /> 3rd Mock: 5th July, 2021
                  <br /> 4th Mock: 10th July, 2021
                  <br /> 5th Mock: 15th July, 2021
                  <br /> 6th Mock: 20th July, 2021
                </li>
                <li>
                  The mock test shall be conducted in an online mode. On the day
                  of the mock test, the link for the mock test shall be sent on
                  the registered email address of the participants at 12 pm
                  (12:00 hrs.).
                </li>
                <li>
                  The Mock Test will contain Negative Marking. Therefore attempt
                  the questions carefully. For every wrong question, 0.25 marks
                  shall be deducted.
                </li>
              </ol>
              <h2>
                <span className="underline">GUIDELINES FOR THE TEST:</span>
              </h2>
              <ol className="mt-4">
                <li>
                  The link for the mock test shall remain active from 12 pm to 4
                  pm (12:00 to 16:00 hrs.). The test has to be attempted in the
                  aforesaid time frame hence the participants are requested to
                  remain ready for the same.
                </li>
                <li>
                  Upon clicking the link, a prompt shall be shown to start the
                  test. As the test starts, a 2 hour 30 min timer shall start
                  within which the paper shall be attempted.
                </li>
                <li>
                  Upon completion of the 2 hours of the Mock Test, it is
                  compulsory to submit the mock test by reaching the Final
                  Section of the Google Form and clicking on the submit button.
                  If the submit button is not clicked and the Google Form is not
                  submitted, the responses to the mock test will not be
                  recorded.
                </li>
                <li>
                  When the mock test starts, do mention your name and email
                  address in the starting of the mock test in the column present
                  in the First Section.
                </li>
                <li>
                  A software generated test code shall be present at the last
                  section of the mock paper. Don’t write or edit anything in
                  this Last Section of the Mock Paper or your results may not be
                  recorded properly.
                </li>
                <li>
                  After the submission of the paper, the participant shall
                  receive an email containing his responses for the purpose of
                  review and filling the FEEDBACK AND OBJECTION form.
                </li>
              </ol>
              <h2>
                <span className="underline">OBJECTIONS AND RESULTS</span>
              </h2>
              <ol className="mt-4">
                <li>
                  After the completion of Each Mock Paper, a FEEDBACK AND
                  OBJECTION form shall be sent to each participant on their
                  registered email address at 5pm (17:00 hrs.).{" "}
                </li>
                <li>
                  Any objections or explanation regarding any question in the
                  mock paper has to stated in this form.{" "}
                </li>
                <li>
                  The deadline for the submission of FEEDBACK AND OBJECTION form
                  shall 11:59pm (23:59 hrs.) after which no objections forms
                  shall be accepted.
                </li>
                <li>
                  The FINAL RESULTS for the mock test shall be released ONE DAY
                  AFTER the mock has been conducted at 6:00 pm (18:00 hrs.) that
                  shall also include any changes to question paper or any
                  explanations to questions.
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Course5;
