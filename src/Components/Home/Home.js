import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import UseReview from '../Hooks/UseReview';
import r1 from '../images/r1.png'
import './Home.css'
const Home = () => {
    const [reviews, setReview] = UseReview();
    return (
        <div className='container '>
            {<div className='first-section'>
                <Row>
                    <Col className=' my-auto ' xs={12} md={6}>
                        <div className='d-flex align-items-center '>
                            <h1 className=' fs-1 fw-bold'> Find Your next Bike <br />
                                <span className='span-text'>Find Your best Bike</span>
                            </h1>
                        </div>
                        <p>Not sure which bike to buy? We'll help you choose the motorcycle based on your budget and performance, mileage requirements. Answer the questions below and let us recommend the bikes that best match your preferences.</p>


                    </Col>
                    <Col className='right-col' xs={6} md={6}>
                        <img className='img-fluid' src={r1} alt="" />
                    </Col>
                </Row>
            </div>}
            <div>
                <CustomerReviews reviews={reviews} ></CustomerReviews>
            </div>
        </div>
    );
};

export default Home;