import React from 'react';
import {  Carousel } from 'react-bootstrap';
import OurHappyStudents from './HomePages/studfeedback'; // Import the OurHappyStudents component
import InstituteStatus from './HomePages/Instutetiming'; // Import the OurHappyStudents component

function HomePage() {

  return (
    <div>

      <div className="container mt-4 " style={{  height: '650px' }}>
        <h1>Welcome to Our Institute!</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="web.jpg"
              alt="First slide"
              style={{ height: '550px', width: 'auto' }}
            />
            <Carousel.Caption style={{ backgroundColor: 'grey', padding: '5px 10px',borderRadius:'30px', maxWidth: 'fit-content'  }}>
              <h2>  Web Development  </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="HtmlCss.jpeg"
              alt="second slide"
              style={{ height: '550px', width: 'auto' }}
            />
            <Carousel.Caption style={{ backgroundColor: 'grey', padding: '5px',borderRadius:'30px', maxWidth: 'fit-content'  }}>
              <h2>  HTML 5 / CSS  </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="fsd.jpg"
              alt="third slide"
              style={{ height: '550px', width: 'auto' }}
            />
            <Carousel.Caption style={{ backgroundColor: 'grey', padding: '5px',borderRadius:'30px', maxWidth: 'fit-content'  }}>
              <h2>  Full Stack Developement  </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="react.png"
              alt="fourth slide"
              style={{ height: '550px', width: 'auto' }}
            />
            <Carousel.Caption style={{ backgroundColor: 'grey', padding: '5px',borderRadius:'30px', maxWidth: 'fit-content'  }}>
              <h2>  REACT  </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="eng.jpeg"
              alt="fifth slide"
              style={{ height: '550px', width: 'auto' }}
            />
            <Carousel.Caption style={{ backgroundColor: 'grey', padding: '5px',borderRadius:'30px', maxWidth: 'fit-content'  }}>
              <h2>  English  </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cyber.jpeg"
              alt="sixth slide"
              style={{ height: '550px', width: 'auto' }}
            />
            <Carousel.Caption style={{ backgroundColor: 'grey', padding: '5px',borderRadius:'30px', maxWidth: 'fit-content'  }}>
              <h2>  Advance CIT  </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div className="container mt-4">
        <OurHappyStudents />
      </div>

      <div className="container mt-4">
        <InstituteStatus/>
       </div>
    </div>
  );
}

export default HomePage;
