
import React, { useEffect, useState } from 'react';
import './CustomerReviews.css'
import Carousel from 'react-bootstrap/Carousel'
import UseReview from '../../Hooks/UseReview';
import r1 from './../images/r1.png'
import { Card } from 'react-bootstrap';



const CustomerReviews = () => {
    const [reviews, setReviews] = UseReview([]);

    console.log(reviews);
    return (
        <div className='cus-review mt-5 d-grid card-style'>
            {
                reviews.map(review =>

                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title><h1 className='text-center'>{review.name}</h1></Card.Title>
                            <Card.Text>
                                <p>{review.about}</p>
                                <h2>Ratings:{review.ratings}</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )

            }

        </div>
    )
};

export default CustomerReviews;