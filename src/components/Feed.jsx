import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BASE_URL from '../../utils/constant';
import { addFeed } from '../../utils/feedSlice';
import FeedCard from './FeedCard';

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();

    const getFeed = async () => {
        // Agar feed already hai to API mat call karo
        if (feed && feed.length > 0) return;

        try {
            const res = await axios.get(BASE_URL + "/feed", {
                withCredentials: true
            });
            
            dispatch(addFeed(res?.data?.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFeed();
    }, []);

     // Ye redux ka data show karega jab update hoga

    return (
  feed && feed.length > 0 && (
    <div>
      <FeedCard user={feed[0]} />
    </div>
  
)
    )

    
};

export default Feed;
