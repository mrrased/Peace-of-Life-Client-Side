import React, { useEffect, useState } from 'react';
import review1 from '../../../images/review1.jpg';
import review2 from '../../../images/review2.jpg';
import review3 from '../../../images/review3.jpg';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
// const reviewData = [
//     {
//         name: 'Enna watson',
//         review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere!',
//         pic: review1
//     },
//     {
//         name: 'Robert wilson',
//         review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere!',
//         pic: review2
//     },
//     {
//         name: 'Christian eleyna',
//         review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere!',
//         pic: review3
//     },
// ]

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://intense-mesa-82736.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="m-5">
            <h1 className="text-start mb-5" style={{color:'#588c7e'}}>Thanks for your sweet<br/> words to us_____</h1>
            <div className="row  justify-content-center">
                {
                    reviews.map( review => <ReviewDetail review={review}></ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default Review;