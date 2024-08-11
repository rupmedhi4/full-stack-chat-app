import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from './../../context/useGetAllUsers';
import useConversation from '../../../zustand/useConversation';
import toast from 'react-hot-toast';

export default function Search() {
  const [search,setSearch] = useState("")
  const [allUsers] = useGetAllUsers()
  const {setSelectedConversation} = useConversation()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!search) return;

    const searchUsers = allUsers.find((user)=>{
      return user.fullname.toLowerCase().includes(search.toLowerCase())
    })

    if(searchUsers){
      setSelectedConversation(searchUsers)
      setSearch("")
    }else{
      toast.error("User not found")
      setSearch("")
    }
  }


  return (
    <div className='h-[10vh] flex items-center justify-center '>
      <div className='px-6 py-4 w-full max-w-2xl'>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label className="bg-gray-700 rounded-lg p-3 border-gray-600 flex items-center gap-2 w-full">
              <input
                type="text"
                className="grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                placeholder="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                onClick={handleSubmit}
              />
            </label>
            <button><FaSearch className='text-5xl p-2 hover:bg-slate-600 rounded-full duration-300'/></button>
          </div>
        </form>
      </div>
    </div>
  );
}
