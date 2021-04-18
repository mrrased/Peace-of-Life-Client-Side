import React from 'react';

const AllBookingDetail = ({ booking }) => {
    console.log(booking)
    const { name, email, status, service, pay } = booking;
    return (
        <div>
            <h4>Name</h4>
            <div className="col-md-2">
                <div><p>{name}</p></div>
            </div>
            <div className="col-md-3">
                <div><p>{email}</p></div>
            </div>
            <div className="col-md-3">
                <div><p>{service}</p></div>
            </div>
            <div className="col-md-2">
                <p>{pay}</p>
            </div>
            <div className="col-md-2">
                <p>{status}</p>
            </div>
        </div>
    );
};

export default AllBookingDetail;