import React from 'react'

const Message = ({message}) => {
  return (
    <div className='flex items-center px-4 py-5 m-4 shadow-xl rounded-lg'>
        <p className='fixed mt-[-50px] '>Dave</p>
        <p className=''>{message.text}</p>
    </div>
  )
}

export default Message