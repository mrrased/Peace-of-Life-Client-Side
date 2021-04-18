import React, { useState } from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const AddReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleReview = data => {
        //console.log(data)
        const reviewData = {
            title: data.title,
            description: data.description,
            imageURL: imageURL
        }
        console.log(reviewData);

        const url = `https://intense-mesa-82736.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
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
        <div className="make-admin p-4">
            <h3>Drop Your Sweet Review</h3>
            <form onSubmit={handleSubmit(handleReview)}>
                <label htmlFor="">Your Name</label>
                <br />
                <input className="form-control mt-2" placeholder="Name" {...register("title")} />
                <br/>
                <label htmlFor="">Review</label>
                <br />
                <input className="form-control mt-2" placeholder="Review" {...register("description")} />
                <br/>
                <label htmlFor="">Your Image</label>
                <br />
                <input className="form-control mt-2" name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input className="submit-btn mt-4" type="submit" />
            </form>

        </div>
    </div>
    );
};

export default AddReview;