import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function AdminLoginPage() {
  const [formData, setFormData] = useState({
    mobileNumber:'',
    username: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Construct the URL with path variables
      const response = await axios.post('http://localhost:8081/login/AdminUserlogin', formData);
      if (response.data === 0) {
        alert("Login failed");
        setTimeout(() => {
          window.location.href = "/*"; // Replace "/" with your error page URL
        }, 3000);
        throw new Error('Failed to sign in');
      } else  {
        alert("Login successful");
        setShowAlert(true);
        // Redirect to homepage after 3 seconds
        setTimeout(() => {
          window.location.href = "/admin"; // Replace with your homepage URL
        }, 3000);
        
      }
    } catch (error) {
      console.error(error);
      alert("Failed to sign in. Please try again later.");
    }
  };
  const textStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  return (
    <Container className="mt-5">
      <h2>Admin Login</h2>
      {showAlert &&
        <Alert variant="success" className="mt-3">
          Login Successful! Redirecting to Adminpage ...
        </Alert>
      }
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsermob" style={{ marginBottom: "10px" }}>
          <Form.Label style={textStyle}>User id <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="text" name="mobileNumber" placeholder='Enter User id' value={formData.usermob} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formUsername" style={{ marginBottom: "10px" }}>
          <Form.Label style={textStyle}>Username <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="text" name="username" placeholder='Enter Username' value={formData.username} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formPassword" style={{ marginBottom: "10px" }}>
          <Form.Label style={textStyle}>Password <span style={{ color: 'red' }}>*</span> : </Form.Label>
          <Form.Control type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      
    </Container>
  );
}

export default AdminLoginPage;
