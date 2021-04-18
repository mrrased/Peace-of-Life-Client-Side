import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './AddService.css';
import axios from 'axios';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleService = data => {
        //console.log(data)
        const serviceData = {
            title: data.title,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        console.log(serviceData);

        const url = `https://intense-mesa-82736.herokuapp.com/addService`;
        console.log(serviceData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response', res))
       
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '297abeb5fd5e0e20c0c4d92713367a68')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
         console.log(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    } 


    return (
        <div>
            <Sidebar></Sidebar>
            <div className="make-admin">
                <form onSubmit={handleSubmit(handleService)}>
                    <label htmlFor="">Service Title</label>
                    <br />
                    <input className="mt-3 mb-3" placeholder="Title" {...register("title")} />
                    <br/>
                    <label htmlFor="">Service Description</label>
                    <br />
                    <input className="mt-3 mb-3" placeholder="Description" {...register("description")} />
                    <br/>
                    <label htmlFor="">Service Price</label>
                    <br />
                    <input className="mt-3 mb-3" placeholder="Price" {...register("price")} />
                    <br/>
                    <label htmlFor="">Upload Service Image</label>
                    <br />
                    <input name="exampleRequired" className="mt-3 mb-3" type="file" onChange={handleImageUpload} />
                    <br />
                    <input className="submit-btn mt-4" type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddService;




 {/* <input type="file" className="mt-3" onChange={handleImageUpload} placeholder="Upload Image" {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>} */}