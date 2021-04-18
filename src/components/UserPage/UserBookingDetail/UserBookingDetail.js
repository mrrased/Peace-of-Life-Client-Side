import React from 'react';
import './UserBookingDetail.css';
import couple from '../../../images/couple.png';

const UserBookingDetail = ({ book }) => {
    return (
        <div className="col-md-6 p-4">
           <div className="booked-box p-5">
           <div className="d-flex">
                <div>
                    <img className="booked-img" src={couple} alt="" srcset="" />
                </div>
                <div>
                    <h6 className="text-end ps-5 pt-4">{book.service} </h6>
                </div>
                <div>
                    <h6 className="text-end ps-5 pt-4">{book.status} </h6>
                </div>
            </div>
            <p className="pe-5 pt-4">Mauris suscipit enec est aliqua a tincidunt eroculis. Proin suscipit risus eu ullamcorper faucibus...Mauris suscipit enec est aliqua a tincidunt eroculis. Proin suscipit risus eu ullamcorper faucibus...</p>
           </div>
        </div>
    );
};

export default UserBookingDetail;