import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../../utils/userSlice';
import axios from 'axios';
import BASE_URL from '../../utils/constant';

const Signup = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      const [error, setError]=useState('')
      const dispatch= useDispatch();
      const navigate = useNavigate();
    
      const handleClick = async()=>{
        try {
          const res = await axios.post(BASE_URL+"/signup",{
            firstName,
            lastName,
            email,
            password,
          },{withCredentials:true});
        console.log(res)
        dispatch(addUser(res.data))
        navigate("/login")
        }catch (err) {
          setError(err?.response?.data || "Signup failed");
          console.error(err);
        }
      }
  return (
    <div className=" flex items-center justify-center bg-[#e0e5ec] mt-[60px]">
      <div className="bg-[#e0e5ec] rounded-2xl shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] p-8 w-80 text-center">
        <h1 className='text-xl font-semibold mb-6 '>SignUp</h1>
        <input
          type="text"
          placeholder="First Name"
          required value={firstName} onChange={(e)=>setFirstName(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />
          <input
          type="text"
          placeholder="Last Name"
          required value={lastName} onChange={(e)=>setLastName(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />
        
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
          Sign Up
        </button>
      
        <button  className='w-1/3 py-2 rounded-xl bg-[#e0e5ec] font-medium 
        shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
        hover:scale-105 transition duration-200 cursor-pointer' onClick={()=>navigate('/login')}>Sign In</button>
      
       
      </div>
    </div>
    </div>
  )
}

export default Signup
