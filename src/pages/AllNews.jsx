import React from 'react';
import AllNewsContainer from '../components/AllNews/AllNewsContainer';
import LatestNewsContainer from '../components/AllNews/LatestNewsContainer';

const AllNews = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row gap-8 my-8'>
            <div className='row-span-full md:row-span-4'>
                <AllNewsContainer />
            </div>
            <div className='row-span-full md:row-span-2 border'>
                <LatestNewsContainer />
            </div>
        </div>
    );
};

export default AllNews;