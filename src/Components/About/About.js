
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import r1 from '../images/r1.png'

const About = () => {
    return (
        <div>
            <h2>this is about</h2>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={r1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default About;