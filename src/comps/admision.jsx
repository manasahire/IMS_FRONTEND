import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Admission.css'; // Import custom CSS file for styling
import axios from 'axios';

function Admission() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    className: '',
    courseName: '',
    address: '',
    paymentMethod: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert( JSON.stringify(formData))
    try {
      const response = await axios.post('http://localhost:8081/admission/addStudent', formData);
      if (response.status === 200) {
        alert("Admission is Successfully Done");
        window.location.href = "/home";
      } else {
        setTimeout(() => {
          window.location.href = "/*"; // Replace "/" with your homepage URL
        }, 3000);
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form. Please try again later.");
    }

  };
  const textStyle = {
  fontWeight: 'bold',
  textTransform: 'uppercase'
    
  };
  const predefinedCourses = [
    "Web Development Bootcamp",
    "Data Science Essentials",
    "Digital Marketing Masterclass",
    "Mobile App Development",
    "Cybersecurity Fundamentals",
    "Graphic Design Workshop"
  ];
  return (
    <Container className="form-container mt-5">
      <h2 className="form-title">Admission Form</h2>
      <Form id="admission-form" onSubmit={handleSubmit}>
        <marquee><h3> SEED Infotech Pvt.Ltd </h3></marquee>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle}>Full Name:</Form.Label>
          <Form.Control type="text" id="full-name" placeholder=' Enter your Full Name ' name="fullName" value={formData.fullName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Email:</Form.Label>
          <Form.Control type="email" id="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Mobile Number:</Form.Label>
          <Form.Control type="tel" id="mobile" pattern="(\+?\d{1,3})?[ -]?\d{10}" placeholder="Enter mobile number" name="mobile" value={formData.mobile} onChange={handleChange}  required />
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Class:</Form.Label>
          <Form.Control type="text" id="class" name="className" placeholder='Enter your Class ' value={formData.className} onChange={handleChange} required/>
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }}>
          <Form.Label style={textStyle}>Course Name:</Form.Label>
            <Form.Control as="select" id="course" name="courseName" value={formData.courseName} onChange={handleChange} required >
                <option value="">Select Course</option>
                {predefinedCourses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
          </Form.Control>
        </Form.Group>
        <Form.Group style={{ marginBottom: "10px" }} >
          <Form.Label style={textStyle} >Address:</Form.Label>
          <Form.Control as="textarea" id="address" name="address" placeholder='Enter your Address ' value={formData.address} onChange={handleChange} rows="4" required />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }} >
          <Form.Label style={textStyle} >Payment Method:</Form.Label><br />
          <Form.Check type="radio" id="card" name="paymentMethod" label="Card" value= "Card" checked={formData.paymentMethod === "Card"} onChange={handleChange}  />
          <Form.Check type="radio" id="upi" name="paymentMethod" label="UPI" value= "UPI" checked={formData.paymentMethod === "UPI"} onChange={handleChange} />
          <Form.Check type="radio" id="cash" name="paymentMethod" label="Cash" value= "Cash" checked={formData.paymentMethod === "Cash"} onChange={handleChange} />
        </Form.Group>

        <div style={{ textAlign: "center" }}>
          <Button type="submit" className="submit-btn">Submit</Button>
        </div>      
      </Form>
    </Container>
  );
}

export default Admission;
