
import React, { useEffect, useState } from 'react';
import './CustomerReviews.css'
import Carousel from 'react-bootstrap/Carousel'
import UseReview from '../../Hooks/UseReview';
import r1 from './../images/r1.png'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const CustomerReviews = () => {
    const [reviews, setReviews] = UseReview([]);
    const sliceReview = reviews.slice(1, 4);

    console.log(reviews);
    return (
        <div className='cus-review mt-5 mb-5 '>
            <h1>Customer Reviews</h1>
            <div className='mt-5 d-grid card-style mb-3'>
                {
                    sliceReview.map(review =>

                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img className='card-img' variant="top" src="../images/user.jpg" /> */}
                            <Card.Body>
                                <Card.Title><h3 className='text-center'>Name: {review.name}</h3></Card.Title>
                                <Card.Text>
                                    <p>{review.about}</p>
                                    <h2>Ratings:{review.ratings}</h2>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    )

                }
            </div>
            <button type="button" class=" btn btn-outline-info"><Link className='link-btn' to="/reviews">See more</Link></button>

        </div>
    )
};

export default CustomerReviews;