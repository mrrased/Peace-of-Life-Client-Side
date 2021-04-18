import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    const history = useHistory();
    const handleBook = () => {
        console.log('hello')
        history.push(`/user`);
    }
    return (
        <div className="col-md-4 mt-5 mb-5 container">
            <div className="service-card">
                <img className="img" src={service.imageURL} alt="" srcset=""/>
                <div className='detail'>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="d-flex">
                    <h3>{service.price}</h3>
                    <button onClick={() => handleBook()} className="btn">Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;