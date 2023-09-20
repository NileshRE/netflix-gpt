import React from 'react'

const VdTitle = ({title, overview}) => {


  return (
    <div className='px-32 py-64 absolute w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold text-blue-600'>{title}</h1>
      <p className='w-1/4 py-6 text-md text-white'>{overview}</p>
      <div>
        <button className='px-4 py-2 my-4 mr-6 w-40 bg-blue-500 rounded-md text-white text-lg font-medium hover:bg-opacity-70'> Play</button>
        <button className='bg-transparent border border-slate-400 rounded-md text-white font-medium px-4 py-2 hover:bg-white hover:text-black'>More info !</button>
      </div>
    </div>
  )
}

export default VdTitle