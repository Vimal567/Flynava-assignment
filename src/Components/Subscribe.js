import "./Subscribe.css";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subsribe-heading-container">
        <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
        <h5>Get weekly updates</h5>
        <br />
        <Form className="form" action="#" method="POST">
          <div>Fill in your details to join the party!</div>
          <br />
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              className="form-inputs"
              required
              type="name"
              name="Name"
              placeholder="Your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="form-inputs"
              required
              type="email"
              name="Email"
              placeholder="Email address"
            />
          </Form.Group>
          <div className="submit">
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Subscribe;
