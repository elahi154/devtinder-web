import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../../utils/constant';
import { removeUser } from '../../utils/userSlice';

const NavBar = () => {
  
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout=async()=>{
    try {
      await axios.post(BASE_URL+'/logout',{},{withCredentials:true})
      dispatch(removeUser());
      return navigate('/login')


    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="navbar  shadow-sm bg-[#e0e5ec]">
        
         <div className="flex-1">
            <Link to='/' className="btn btn-ghost text-xl shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
        hover:scale-105 transition duration-200 cursor-pointer">Dev Tinder</Link>
      </div>
      {user && <div className="flex gap-2">
        <div className='text-sm font-semibold px-4 py-2  text-gray rounded-full shadow-sm cursor-pointer shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
        hover:scale-105 transition duration-200 cursor-pointer'>welcome {user.firstName}</div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] 
        hover:scale-105 transition duration-200 cursor-pointer">
              <img
                alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
            <ul
              tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to = '/profile' className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
              <li><a>Settings</a></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>}
    </div>
    </>
  )
}

export default NavBar
