import React from 'react';
import { Card } from 'react-bootstrap';
import UseReview from '../../Hooks/UseReview';

const Reviews = () => {
    const [reviews, setReviews] = UseReview([]);
    return (
        <div className='container mt-5 d-grid card-style mb-3'>
            {
                reviews.map(review =>

                    <Card className='mb-5' style={{ width: '18rem' }}>
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
    );
};

export default Reviews;