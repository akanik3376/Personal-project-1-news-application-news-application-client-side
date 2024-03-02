import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";

const NewsCard = ({ data, HandelLikeButton }) => {
    const { image, news_type, } = data;
    const { url: imageUrl, caption: imageCaption } = image;

    return (
        <div className=" flex flex-col border rounded-md p-2">
            <figure><img src={imageUrl} alt={imageCaption} /></figure>
            <div className='mt-4'>

                <h3 className="text-xl font-semibold">{news_type}</h3>
                <div className='flex gap-3 mt-3 items-center'>
                    <span className='flex gap-1 items-center text-xl'>
                        <p>20</p>
                        <button onClick={HandelLikeButton}><AiOutlineLike /></button>
                    </span>
                    <BiShareAlt />
                </div>

            </div>
        </div>
    );
};

export default NewsCard;
