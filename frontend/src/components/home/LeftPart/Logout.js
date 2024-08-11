import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import Cookies from "js-cookie"
import { useAuth } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

export default function Logout() {
  const [loading, setLoading] = useState(false)
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = async()=>{
    setLoading(true)
    try {
      const res = await axios.post("/api/user/logout")
      localStorage.removeItem("ChatApp")
      Cookies.remove("jwt")
      setLoading(false)
      toast.success("logged out successfully")
      setAuthUser(null)
    } catch (error) {
      toast.error("Something went wrong")
    }
  }
  return (
    <div className='h-[10vh]'>
      <div className='px-6  bg-gray-800 ' onClick={handleLogout}>
        <button><AiOutlineLogout className='text-5xl p-2 hover:bg-slate-600 rounded-full duration-300' /></button>
      </div>
    </div>

  )
}