import React from 'react'
import User from './User'
import Logout from './Logout'
import useGetAllUsers from './../../context/useGetAllUsers';

export default function Users({user}) {
  const [allUsers,loading] = useGetAllUsers()
  console.log(allUsers);
    return (
        <div className='pt-6 container mx-auto'>
            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md text-center md:text-left'>Messages</h1>
            <div className='py-2 flex-1 overflow-y-auto' style={{maxHeight: "calc(74vh - 10vh)"}}>
                <div >
                    <User />
                   
                </div>
            </div>
        </div>
    )
}
