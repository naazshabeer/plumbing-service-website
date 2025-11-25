import React from 'react'

const inputFieldItems = [
    {
        id:1,
        label:'First Name',
        type:'text',
    },
    {
        id:2,
        label:'Last Name',
        type:'text',
    },
    {
        id:3,
        label:'Email',
        type:'email',
    },
    {
        id:4,
        label:'Phone',
        type:'text',
    },
]

export default function InputField() {
  return (
    <div className='grid gap-3.5 mt-6 md:grid-cols-2'>
      {inputFieldItems.map(item => (
        <input 
          placeholder={item.label} 
          type={item.type} 
          key={item.id}
          className='outline-none w-full border border-primaryClr/50
          indent-5 py-3 placeholder-gray-800 rounded-lg
          focus:border-secondaryClr-1'
        />
      ))}
    </div>
  )
}
