import React from 'react';

const Blog = ({ blog }) => {

    const { bloggerName, bloggerImage, blogTitle, blogImage } = blog || ""
    return (
        <div className='border p-2 rounded-md'>
            <figure><img src={blogImage} alt="" /></figure>
            <div className='mt-4'>
                <h4 className="text-xl">{blogTitle}</h4>
                <div className='flex items-center gap-3 '>
                    <figure><img src={bloggerImage} className='w-24 rounded-full border-2' alt="" /></figure>
                    <p>{bloggerName}</p>
                </div>
                <p className="text-xs">date: 6/3/2024</p>
            </div>
        </div>
    );
};

export default Blog;