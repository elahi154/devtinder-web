import React, { useState } from 'react'
import FeedCard from './FeedCard';
import axios from 'axios';
import BASE_URL from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import { toast, ToastContainer } from 'react-toastify';


const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
    const [age,setAge]=useState(user.age);
    const[gender, setGender] = useState(user.gender);
    const[about, setAbout] = useState(user.about);
    const dispatch = useDispatch();
    

    const saveProfile = async() =>{
        try {
            const res = await axios.patch(BASE_URL+ '/profile/edit',{
                firstName, lastName,  gender, age,  about
            },{withCredentials:true})
            dispatch(addUser(res.data.data))
             toast.success("Profile updated successfully!", {
                position: "top-right",
                autoClose: 3000,
            });
        } catch (error) {
            console.log(error)
             toast.error("Failed to update profile!", {
                position: "top-right",
                autoClose: 3000,})
        }
    }

  return (<div className='flex justify-center gap-[20px]'>
     <div className=" flex items-center justify-center bg-[#e0e5ec] mt-[20px]">
      <div className="bg-[#e0e5ec] rounded-2xl shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] p-8 w-80 text-center">
        <h1 className='text-xl font-semibold mb-6 '>Profile</h1>
        <input
          type="text"
          placeholder="First Name"
          required 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />

        <input
          type="text"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />
        <input
          type="text"
          placeholder="PhotoUrl"
          required
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />
        <div className='flex gap-3 '>
             <input
          type="number"
          placeholder="Age"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />
        <input
          type="text"
          placeholder="Gender"
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />
        </div>
       
        <textarea
          type="text"
          placeholder="About"
          required
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl bg-[#e0e5ec] 
          shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
          hover:scale-105 transition duration-200 outline-none"
        />
          

        <div className='flex justify-center gap-x-4'>
          <button className="w-1/2 py-2 rounded-xl bg-[#e0e5ec] font-medium 
        shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
        hover:scale-105 transition duration-200 cursor-pointer" onClick={saveProfile}>
          Save Profile
        </button> 
        
      </div>
      </div>
    
    </div>
    <FeedCard user ={{firstName, lastName, photoUrl,age, gender,about }} className="m-[40px] "/>
    <ToastContainer />
    </div>
  )
}

export default EditProfile;
