import React from 'react';
import './Footer.css';
import fb from '../../../images/fbook.png';
import tw from '../../../images/twitter.png';
import yt from '../../../images/youtube.png';
import ig from '../../../images/instagram.png';


const Footer = () => {
    
    return (
       <div className="footer">
            <div className="container">
            <div className="row">
                <div className="col-md-4 p-5">
                    <h3 className="text-center text-white">COMPANY</h3>
                    <p className="text-center text-white"><small>Our services</small></p>
                    <p className="text-center text-white"><small>About us</small></p>
                    <p className="text-center text-white"><small>Contracts</small></p>
                    <p className="text-center text-white"><small>Blog</small></p>
                </div>
                <div className="col-md-4 p-5">
                    <h3 className="text-center text-white">CONTRACT</h3>
                    <p className="text-center"><small style={{color: 'red'}}>peaceof.life@gmail.vom</small></p>
                    <p className="text-center text-white"><small>+ 009936548800</small></p>
                    <div className="row icons">
                        <div className="col-md-3"><img class="icon" src={fb} alt="" srcset=""/></div>
                        <div className="col-md-3"><img class="icon" src={tw} alt="" srcset=""/></div>
                        <div className="col-md-3"><img class="icon" src={yt} alt="" srcset=""/></div>
                        <div className="col-md-3"><img class="icon" src={ig} alt="" srcset=""/></div>
                    </div>


                </div>
                <div className="col-md-4 footer p-5">
                    <h3 className="text-center text-white">ADDRESS</h3>
                    <p className="text-center text-white"><small>39 York Road</small></p>
                    <p className="text-center text-white"><small>London SE17NQ</small></p>
                    <p className="text-center text-white"><small>UK</small></p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Footer;