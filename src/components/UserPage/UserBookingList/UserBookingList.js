import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import UserBookingDetail from '../UserBookingDetail/UserBookingDetail';

const UserBookingList = () => {

    const [bookings, setBookings] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
 console.log(loggedInUser);
    useEffect(() => {
        // const url= 'https://intense-mesa-82736.herokuapp.com/bookings?email'+loggedInUser.email
        const url= 'https://intense-mesa-82736.herokuapp.com/bookings?email='+loggedInUser.email;
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBookings(data)
            console.log(data)
        })

    }, [])


    return (
        <div>
           <Sidebar></Sidebar>
        <div className="make-admin p-4">
            <h1 className="pb-4" style={{color: '#379683'}}>My booking list </h1>
            <div className="row">
                {
                    bookings.map( booking => <UserBookingDetail book={booking}></UserBookingDetail>)
                }
            </div>
        </div>
        </div>
    );
};

export default UserBookingList;