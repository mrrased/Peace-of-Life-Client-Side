import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="top-banner">
            <Navigation></Navigation>
            <h1 className="top-heading"><span className="">We are Here for<br/> Your Sweet Dreams</span></h1>
        </div>
    );
};

export default TopBanner;