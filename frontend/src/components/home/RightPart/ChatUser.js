import React from 'react'
import useConversation from '../../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

export default function ChatUser() {
    const { messages, setMessage, selectedConversation } = useConversation();
    const { socket, onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(selectedConversation._id)

    return (
        <div className=' h-[10vh] flex space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-700 duration-300'>
            <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-16 rounded-full">
                  <img src="/Dp.jpg" alt="profile img" srcset="" />
                </div>
            </div>
            <div >
                <h1 className='text-xl'>{selectedConversation ? selectedConversation.fullname : null}</h1>
                <span className='text-sm'>{isOnline ? "Online" : "Offline"}</span>
            </div>
        </div>
    )
}
