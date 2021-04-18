import React from 'react';
import des1 from '../../../images/des1.jpg';
import des2 from '../../../images/des2.jpg';
import des3 from '../../../images/des3.jpg';
import des4 from '../../../images/des4.jpg';
import './Designer.css';

const Designer = () => {
    return (
        <div className="container designer">
            <h1 className="text-center">Our 4 Professional Photograper</h1>
            <div className="row justify-content-center">
                <div className="col-md-6 desbox p-5">
                    <img style={{height: "500px"}} 
                     className="image mb-5" src={des2} />
                    <img className="image" src={des3} />
                </div>
                <div className="col-md-6 desbox p-5">
                        <img style={{height: "550px"}} className="image" src={des1} />
                        <img className="image mt-5" src={des4} />
                </div>
            </div>
        </div>
    );
};

export default Designer;