import React, { useState } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const InputBox = ({sendMessage}) => {

  const [value, setValue] = useState("")

  const handleSubmit = () =>{
    if(value === "") return;
    sendMessage({sender: "user", message: value})
    setValue("");
  }

  return (
    <div className='w-full bg-black bg-opacity-10 max-h-40 rounded-lg py-4 px-3 overflow-auto relative flex justify-between items-center'>

      <textarea 
      onKeyDown={(e)=> {
        e.keyCode === 13 && e.shiftKey === false && handleSubmit();
      }}
      rows={1}
      className='border-0 bg-transparent outline-none w-11/12'
      value={value}
      type= "text"
      onChange={(e) => setValue(e.target.value)} />

      <div className='absolute right-3 hover:cursor-wait ease-in duration-100 hover:scale-125' onClick={handleSubmit} ><ArrowCircleRightIcon style={{ fontSize: 40 }}/></div>
      
    </div>
  )
}

export default InputBox