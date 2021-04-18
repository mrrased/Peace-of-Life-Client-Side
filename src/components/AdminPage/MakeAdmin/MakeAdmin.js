import React from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const handleAdmin = adminData => {
        console.log(adminData);
        fetch('https://intense-mesa-82736.herokuapp.com/addAdmin', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="make-admin">
                <form onSubmit={handleSubmit(handleAdmin)} className="mt-5 ms-4">
                    <label htmlFor="">Email</label>
                    <br />
                    <input placeholder="Email" {...register("email")} className="email-input mt-3" />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="submit-btn mt-4" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;