import React, { useEffect, useState } from 'react';
import NewsCard from '../News/NewsCard';

const LatestNews = () => {
    const [news, setNews] = useState()
    const [like, setLike] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./news.json');
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const HandelLikeButton = () => {
        setLike(like + 1)

        // save like data in database
    }

    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-4xl font-semibold mb-4'> Latest news</h1>
            {/* all type of news is hare && filter news */}
            <div className='container mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    news?.news.map((data, index) => <NewsCard key={index} data={data} HandelLikeButton={HandelLikeButton}></NewsCard>)
                }
            </div>

        </div>
    );
};

export default LatestNews;