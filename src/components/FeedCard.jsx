import React from 'react'

const FeedCard = ({user}) => {
    const {firstName, lastName,  gender, age,  about} = user;
  return (
     <div className=" flex items-center justify-center bg-[#e0e5ec] mt-[10px]">
      <div className="bg-[#e0e5ec] rounded-2xl shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff]  w-70 pb-2 text-center">
        <img src={user.photoUrl} alt='photo'/>
        <h1 >{firstName+" "+lastName}</h1>
        {age && gender &&<p>{age+" / "+gender}</p>}
        <p className='text-start px-2'>{about}</p>
        <div className='flex justify-center gap-x-8 pt-[20px]'>
          <button className="w-1/3 py-2 rounded-xl bg-blue-400 font-medium 
             shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
            hover:scale-105 transition duration-200 cursor-pointer">
          Ignore
        </button>
        <button  className='w-1/3 py-2 rounded-xl bg-pink-500 font-medium 
        shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
        hover:scale-105 transition duration-200 cursor-pointer' >Interested</button>
        
        </div>
      </div>
    
    </div>
  )
}

export default FeedCard
