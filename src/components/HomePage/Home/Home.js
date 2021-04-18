import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Designer from '../Designer/Designer';
import Invitation from '../Invitation/Invitation';
import Project from '../Project/Project';
import Review from '../Review/Review';
import Service from '../Service/Service';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Service></Service>
            <Invitation></Invitation>
            <Designer></Designer>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;