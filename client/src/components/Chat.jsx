import React from 'react'

const Chat = ({chats}) => {

    const berryStyle= "bg-opacity-25 backdrop-blur-lg dropshadow-md mr-auto";


  return (
    <div className="flex flex-col gap-4">
        {/* Client Message */}
        {chats.map((message,i) => {
            return (
                <div key={i} className={`border-black break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${message.sender === "ai" && berryStyle}`}>
                <pre className='whitespace-pre-wrap'>
                    <span>{message.message}</span>
                </pre>
                </div>
            );
        })}

                {/* Berry Message */}
                {/* <div className={`border-0 bg-slate-400 break-words rounded-xl self-end px-3 py-3 max-w-[80%] ${berryStyle}`}>
            <pre>
                <span>Here to help you.</span>
            </pre>
        </div> */}

        
    </div>
  )
};

export default Chat;
