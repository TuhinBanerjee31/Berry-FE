import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import InputBox from './components/InputBox'
import {useMutation} from "react-query"
import { fetchResponse } from './api'

function App() {

  const [chats, setChats]= useState([])

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chats);
    },
    onSuccess: (data) =>
    setChats((prev) => [
      ...prev,
      { sender: "ai", message: data.message.replace(/^\n\n/, "") },
    ]),
});

  const sendMessage = async (message) => {
    await Promise.resolve(setChats((prev)=>[...prev, message]));
    mutation.mutate();
  };

  return (
    <div className="App bg-[#b5b5b5] h-screen relative overflow-hidden flex flex-col justify-between align-middle pb-3">

      <div className='navbar uppercase font-bold text-2xl text-center bg-[#ffffffd8] py-4'>Berry: The Finance Expert</div>

      <div className='h-[90%] overflow-auto w-full max-w-6xl min-w-[20rem] py-8 px-4 self-center'>
        <Chat chats={chats} />
      </div>

      <div className='w-full max-w-6xl min-w-[20rem] self-center'>
        <InputBox sendMessage={sendMessage} />
      </div>

    </div>
  )
}

export default App
