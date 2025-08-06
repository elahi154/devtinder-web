import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../../utils/constant';

const Login = () => {
  const [email,setEmail]=useState("perwez123@gmail.com");
  const [password,setPassword]=useState("Perwez@12345");
  const [error, setError]=useState('')
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const handleClick = async()=>{
    try {
      const res = await axios.post(BASE_URL+"/login",{
        email,
        password,
      },{withCredentials:true});
    console.log(res)
    dispatch(addUser(res.data))
    navigate("/")
    }catch (err) {
      setError(err?.response?.data || "Login failed");
      console.error(err);
    }
  }
  return (
    <div className=" flex items-center justify-center bg-[#e0e5ec] mt-[60px]">
      <div className="bg-[#e0e5ec] rounded-2xl shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] p-8 w-80 text-center">
        <h1 className='text-xl font-semibold mb-6 '>Login</h1>
        <input
          type="text"
          placeholder="Email"
          required value={email} onChange={(e)=>setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters"
          onChange={(e)=>setPassword(e.target.value)}

          className="w-full mb-6 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />
          <p className='text-red-500'>{error}</p>

        <div className='flex justify-center gap-x-4'>
          <button onClick={handleClick} className="w-1/3 py-2 rounded-xl bg-[#e0e5ec] font-medium 
        shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
        hover:scale-105 transition duration-200 cursor-pointer">
          Sign In
        </button>
        
        <button  className='w-1/3 py-2 rounded-xl bg-[#e0e5ec] font-medium 
        shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
        hover:scale-105 transition duration-200 cursor-pointer' onClick={()=>navigate('/signup')}>Sign Up</button>
        
        </div>
      </div>
    
    </div>
  )
}

export default Login
