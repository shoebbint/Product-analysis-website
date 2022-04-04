
import React from 'react';
import './CustomerReviews.css'
import Carousel from 'react-bootstrap/Carousel'
import UseReview from '../Hooks/UseReview';

const CustomerReviews = (props) => {
    const [name, id] = props.reviews;
    console.log();
    return (
        <div className='cus-review'>
            {

                <Carousel variant="dark">

                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="First slide"
                        />
                        <Carousel.Caption >
                            <h3 className='text-black'>name:{name}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            }
        </div>
    )
};

export default CustomerReviews;