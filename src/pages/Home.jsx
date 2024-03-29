import React from 'react';
import Banner from '../components/HeaderComponent/Banner';
import image from "../assets/images/banner.jpg"
import LatestNews from '../components/home/LatestNews';
import LatestBlog from '../components/home/LatestBlog';
const Home = () => {
    return (

        <>
            <Banner backgroundImage={image}
                header='Discover the Latest'
                paragraph='Uncover captivating stories and stay informed with our curated selection of news articles. Explore the world of insights, events, and trends that matter'
                button="Explore More"></Banner>

            <LatestNews />

            <LatestBlog />
        </>

    );
};

export default Home;
