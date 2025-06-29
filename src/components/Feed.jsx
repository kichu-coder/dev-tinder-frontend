import React, { useEffect } from 'react'
import api from '../utils/axios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import { store } from '../utils/store';
import UserCard from './UserCard';

const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      if (feed) {
        return;
      }
      const response = await api.post("user/feed?page=1&limit=5");
      dispatch(addFeed(response?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  },[])

  if(!feed) {
    return;
  }

  if(feed.length <= 0) {
    return <h1 className="flex justify-center my-10">No Users Left</h1>;
  }

  return (
    feed?.length > 0 && <div className='flex justify-center my-10'><UserCard user={feed?.[0]}/></div>
  )
}

export default Feed