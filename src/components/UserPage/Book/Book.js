import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { serviceContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Payment from '../Payment/Payment';
import './Book.css';

const Book = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [services, setServices] = useContext(serviceContext);
    useEffect(() => {
        fetch('https://intense-mesa-82736.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    // console.log(services)


  const onSubmit = data => {
    const bookingData = {
        name: data.example,
        email: data.email,
        service: data.servicename,
        status: data.bookstatus,
        pay: data.paywith
    }
    console.log(bookingData);

    const url = `https://intense-mesa-82736.herokuapp.com/addBooking`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(res => console.log('server side response', res))
  };
    return (
        <div>
             <Sidebar></Sidebar>
            <div className="make-admin p-4">
                <h3>Book for {services.title}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control " placeholder="Name" {...register("example")} /><br/>

      <input className="form-control " placeholder="name@gmail.com" {...register("email")} /><br/>
      {errors.exampleRequired && <span>This field is required</span>}
      <input className="form-control " placeholder="Service type" {...register("servicename")} /><br/>
      <input className="form-control " placeholder="Book: On going/pending/Done" {...register("bookstatus")} /><br/>
      <input className="form-control " placeholder="Credit Card or Paypal" {...register("paywith")} /><br/>
      <Payment></Payment>
      <input className="submit-btn" type="submit" />
    </form>
            </div>
        </div>
    );
};

export default Book;