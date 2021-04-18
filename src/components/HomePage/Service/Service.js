import React, { useContext, useEffect } from 'react';
import { serviceContext } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Service = () => {

    const [services, setServices] = useContext(serviceContext);
    useEffect(() => {
        fetch('https://intense-mesa-82736.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div className="">
            <h1 className="text-center mt-5">Our Services</h1>
            <div className="ms-3 me-3 row justify-content-center">
                {
                   services.map(service => <ServiceDetail service={service}></ServiceDetail>) 
                }
            </div>
        </div>
    );
};

export default Service;