import React from 'react';
import invitation from '../../../images/invitation.jpg'
import './Invitation.css';

const Invitation = () => {
    return (
        <div className="mt-5 row container mb-5">
            <div className="col-md-6 p-5 inv">
                <h1 className="text-center">Invitation Form</h1>
                <h6 className="text-center text-secondary p-3">------RSVP------</h6>
                <p className="text-center text-secondary p-3">Happiness is bigger when shared! Let your visitors share the info on their big day with lovely invitation and practical RSVP form that allows their quests to confirm attendance with 1 click.</p>
                <button className="btn m">View More</button>
            </div>
            <div className="col-md-6 pic">
                <img className="invite-pic" src={invitation} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Invitation;