import React, { useState } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import useSendMessage from '../../context/useSendMessage';

export default function Typesend() {

    const [message, setMessage] = useState("");
    const { loading, sendMessages } = useSendMessage();


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await sendMessages(message);
            setMessage("");
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex space-x-1 h-[8vh]  bg-gray-800">
                <div className=" w-[70%] mx-4">
                    <input
                        type="text"
                        placeholder="Type here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-gray-700 rounded-xl outline-none mt-1 px-4 py-3 w-full"
                    />
                </div>
                <button>
                    <RiSendPlaneFill className="text-3xl" />
                </button>
            </div>
        </form>
    )
}
