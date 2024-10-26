import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const { token, credit, loadCreditsData, userData, loadUserProfileData } = useContext(AppContext)

  useEffect(() => {
    if (token) {
      loadCreditsData()
    }
  }, [token])

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to={'/'}><img className='w-32 sm:w-44' src={assets.logo} alt="icon" /></Link>
      {
        token && userData
          ? <div className='flex items-center gap-2 sm:gap-3'>
            <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700'>
              <img className='w-5' src={assets.credit_icon} alt="icon" />
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits : {credit}</p>
            </button>
            <p className='text-gray-600 max-sm:hidden'>Hi, {userData.name}</p>
          </div>
          : <button onClick={() => navigate('/login')} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
            Get started  <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="icon" />
          </button>
      }

    </div>
  )
}

export default Navbar;