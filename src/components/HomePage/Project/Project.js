import React from 'react';
import caro1 from '../../../images/caro1.jpeg';
import caro2 from '../../../images/caro2.jpeg';
import caro6 from '../../../images/caro6.jpg';
import caro5 from '../../../images/caro5.jpg';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



// const projectData = [
//     {
//         title: 'Iztapalapa',
//         area: 'MEXICO CITY',
//         img: caro1,
//         des: 'Mexican design has an eclectic feel, mixing rustic wood and wrought iron furnishings with over-the-top, bright, vivid colors.'
//     },
//     {
//         title: 'Chelmsforth',
//         area: 'LONDON',
//         img: caro2,
//         des: 'The creation of elegant, stylish and comfortable homes is our passion. '
//     },
//     {
//         title: 'Jardin Japones',
//         area: 'BUENOS AIRES',
//         img: caro6,
//         des: 'Buenos Aires’s bold, evocative design culture is rooted in the tide of European immigrants who arrived by boat at the turn of the 20th century. '
//     },
//     {
//         title: 'Chateau',
//         area: 'NEW YORK',
//         img: caro5,
//         des: 'Inspired by the glorious chateaus of France, this  space was uniquely transferred into a  sophisticated and luxurious retreat that reflects that magical merging of inspiration and architecture.'
//     }
// ]

const Project = () => {
    return (
        <div className>
            <h1 className="text-center mb-5">Our Recent Projects</h1>
            <div className>
            <Carousel>
                <div>
                    <img src={caro1} />
                    <h3>Iztapalapa</h3>
                    <p className="legend">MEXICO CITY</p>
                </div>
                <div>
                    <img src={caro2} />
                    <h3>Chelmsforth</h3>
                    <p className="legend">LONDON</p>
                </div>
                <div>
                    <img src={caro6} />
                    <h3>Jardin Japones</h3>
                    <p className="legend">BUENOS AIRES</p>
                </div>
                <div>
                    <img src={caro5} />
                    <p className="legend">NEW YORK</p>
                    <h3>Chateau</h3>
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Project;