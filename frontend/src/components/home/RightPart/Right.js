import React from 'react'
import ChatUser from './ChatUser';
import Messages from './Messages';
import Typesend from './Typesend';
import useConversation from '../../../zustand/useConversation';
import { useAuth } from '../../context/AuthProvider';

export default function Right() {
  const { messages, setMessage, selectedConversation } = useConversation();

  return (
    <div className='w-[70%] bg-slate-900 text-gray-300'>
      {
        selectedConversation ?
          <>
            <ChatUser />
            <div className='flex-1 overflow-y-auto' style={{ maxHeight: "calc(92vh - 10vh)" }}>
              <Messages />
            </div>
            <Typesend />
          </> :
          <div>
            <NoChatSelected/>
          </div>
      }
    </div>
  )
}




const NoChatSelected = () => {

  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="relative">
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};