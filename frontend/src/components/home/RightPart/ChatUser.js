import React from 'react'
import useConversation from '../../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

export default function ChatUser() {
    const { messages, setMessage, selectedConversation } = useConversation();
    const { socket, onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(selectedConversation._id)

    let avatar = selectedConversation.fullname.split(" ");

    let firstNameLetter = avatar[0][0] || '';
    let lastNameLetter = avatar.length > 1 ? (avatar[avatar.length - 1][0] || '') : (avatar[0][1] || '');

    avatar = firstNameLetter.toUpperCase() + lastNameLetter.toUpperCase();

    return (
        <div className=' h-[10vh] flex space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-700 duration-300'>
             <div className="w-12 h-12 rounded-full bg-white ">
                    <span className='text-black font-bold flex  justify-center mt-3'>
                        {avatar}
                    </span>
                </div>
            <div >
                <h1 className='text-xl'>{selectedConversation ? selectedConversation.fullname : null}</h1>
                <span className='text-sm'>{isOnline ? "Online" : "Offline"}</span>
            </div>
        </div>
    )
}
