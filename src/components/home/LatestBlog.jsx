import React, { useEffect, useState } from 'react';
import Blog from '../News/Blog';

const LatestBlog = () => {
    const [blogs, setBlogs] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./blog.json');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    console.log(blogs)
    return (
        <div className='container mx-auto my-12 '>
            <h1 className='text-4xl font-semibold mb-4'> Latest Blogs</h1>
            {/* all type of news is hare && filter news */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  '>
                {
                    blogs?.map((blog, index) => <Blog key={index} blog={blog} />)
                }
            </div>

        </div>
    );
};

export default LatestBlog;