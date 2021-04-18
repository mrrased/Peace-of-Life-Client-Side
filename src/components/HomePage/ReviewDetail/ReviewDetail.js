import React from 'react';
import './ReviewDetail.css'

const ReviewDetail = ({ review }) => {
    return (
        <div className="col-md-4 mb-5 review-card">
            <div className="review">
                <div className="d-flex">
                    <div><img className="review-img p-3" src={review.imageURL} alt="" srcset="" /></div>
                    <div>
                        <h3 className="p-4">{review.title}</h3>
                    </div>
                </div>
                <div>
                    <p className="p-4">{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;





{/* <div className="d-flex">
    <div><img style={{ height: '70px', width: '70px' }} src={review.pic} alt="" srcset="" /></div>
    <div>
        <h3>{review.name}</h3>
    </div>
</div> */}