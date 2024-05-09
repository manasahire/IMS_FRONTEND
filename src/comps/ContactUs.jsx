import React, { useState } from "react";
import {  Container, Row, Col, Form, Button, Alert, Card} from "react-bootstrap";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    alert(JSON.stringify(formData));
    try {
      const response = await axios.post(
        "http://localhost:8081/contact/userContact",
        formData
      );
      if (response.status === 200) {
        alert(" thank you for contacting us, we will shortly connect with you  ");
        setShowAlert(true);
         // Redirect to homepage after 3 seconds
        setTimeout(() => {
          window.location.href = "/home"; // Replace "/" with your homepage URL
        }, 3000);
      } else {
        setTimeout(() => {
          window.location.href = "/*"; // Replace "/" with your homepage URL
        }, 3000);
        throw new Error("Failed to connect  in ");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to sign in. Please try again later.");
    }
    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
      phoneNumber: "",
    });

   
  };
  const textStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <div>
            <h2 style={{ textAlign: "center" }}>Contact Us</h2>
            <p style={{ textAlign: "center" }}>
              Please feel free to reach out to us using any of the following
              methods:
            </p>
            <ul
              className="contact-list"
              style={{ listStyleType: "none", paddingLeft: 0 }}
            >
              <li style={{ marginBottom: "10px" }}>
                <Card>
                  <Card.Body>
                    <FaWhatsapp />{" "}
                    <span style={{ marginLeft: "10px" }}>+91-985-458-1259</span>
                  </Card.Body>
                </Card>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Card>
                  <Card.Body>
                    <FaPhone />{" "}
                    <span style={{ marginLeft: "10px" }}>+91-985-458-1256</span>
                  </Card.Body>
                </Card>
              </li>
              <li  style={{ marginBottom: "10px" }}>
                <Card>
                  <Card.Body>
                    <FaEnvelope />{" "}
                    <span style={{ marginLeft: "10px" }}>
                      seedinfotech@gmail.com
                    </span>
                  </Card.Body>
                </Card>
              </li>
              <li>
                <Card className="contact-card">
                  <Card.Body>
                    <Card.Title>Contact Us</Card.Title>
                    <Card.Text>
                      Shri Vile Parle Kelavani Mandal’s Institute Of Technology,
                      Survey No. 499, Plot No 02, Behind Gurudwara, Mumbai Agra
                      National Highway, Dhule -424 001, Maharashtra, India
                    </Card.Text>
                  </Card.Body>
                </Card>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" style={{ marginBottom: "20px" }}>
              <Form.Label style={textStyle}>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your Name "
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" style={{ marginBottom: "20px" }}>
              <Form.Label style={textStyle}>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage" style={{ marginBottom: "20px" }}>
              <Form.Label style={textStyle}>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Enter your message "
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber"  style={{ marginBottom: "20px" }}>
              <Form.Label style={textStyle} >Your Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                pattern="(\+?\d{1,3})?[ -]?\d{10}"
                placeholder="Enter mobile number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
          {showAlert && (
            <Alert variant="success" className="mt-3">
              Thanks for contacting us! We will get back to you shortly.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
