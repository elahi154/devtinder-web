import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../utils/constant'
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import Feed from './Feed';

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + '/profile/view', {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response && err.response.status === 401) {
        navigate('/login');
      }
      console.error('Error fetching user profile:', err);
    }
  };

  // 🔁 Call on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='min-h-screen  bg-[#e0e5ec]'>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Body;
