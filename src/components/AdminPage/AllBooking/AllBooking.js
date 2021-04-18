import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AllBookingDetail from '../AllBookingDetail/AllBookingDetail';

const AllBooking = () => {

    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://intense-mesa-82736.herokuapp.com/allBooking')
            .then(res => res.json())
            .then(data => {
                setAllBookings(data)
            })
    }, [])
    return (
        <div>
            <Sidebar></Sidebar>
            <h3 className="m-4 text-center">All Bookings</h3>
            <div className="row make-admin">
                {
                    allBookings.map(booking => <AllBookingDetail booking={booking}></AllBookingDetail>)
                }
            </div>

        </div>
    );
};

export default AllBooking;