import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://intense-mesa-82736.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
            <ul>
                <li><Link to="/book">Booking</Link></li>
                <li><Link to="/userbooking">User Booking List</Link></li>
                <li><Link to="/addreview">Add Review</Link></li>
               { isAdmin && <div>
                <li><Link to="/allbooking">All Booking List</Link></li>
                <li><Link to="/makeadmin">Make Admin</Link></li>
                <li><Link to="/addservice">Add service</Link></li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;