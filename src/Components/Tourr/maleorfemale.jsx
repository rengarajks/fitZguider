import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const MaleOrFemale = () => {
    const navigate=useNavigate();

    const handleMale=()=>{
        localStorage.setItem('gender',true);
        navigate('/weight')
    }

    const handleFemale=()=>{
        localStorage.setItem('gender',false);
        navigate('/weight')
    }

  return (
    <div>
        <div className='flex justify-center py-4 pt-8'>
            <div><h1 className='font-semibold'>Are you,</h1></div>
            </div>

            <div className='flex justify-center py-4 pb-8 gap-4 '>
                <div className='bg-green-500 hover:bg-green-800 px-5 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={handleMale}>Male</div>
                <div className='bg-red-500 hover:bg-red-800 px-4 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={handleFemale}>Female</div>
            </div>

            
    </div>
  )
}

export default MaleOrFemale