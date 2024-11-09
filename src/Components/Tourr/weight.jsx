import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const WhatIsYourWeight = () => {
    const navigate=useNavigate();
 
    const handleBack=()=>{
        navigate('/');
    }

    const handleNext=()=>{
        console.log("Next from weight...",weight)
             
        if(!flag){
            localStorage.setItem('weight',weight);
        }
        navigate('/height')
        
    }


    const[weight,setWeight]=useState(0);
    const [flag,setFlag]=useState(false);
    

    const handleChange=(e)=>{
   
        setWeight(e.target.value);
        // console.log('e=',e.target.value)
        // console.log('Curr=',weight);
        if(e.target.value>20 && e.target.value<=200){
            setFlag(false);
        }
        else{
            setFlag(true);
        }
    }


  return (
    <div>
        <div className='flex justify-center py-4 pt-8'>
                <div className=''>
                <div className='flex gap-1'>
                    <h1 className='font-semibold flex items-center'>What is your current weight?</h1>
                    <TextField className=' w-[6rem]' type='number' value={weight} onChange={handleChange}/>
                    <h1 className='font-semibold flex items-center'>kg</h1>
                </div>

                {flag&& <h1 className='font-semibold text-center text-red-500 pt-4'>Enter valid weight</h1>}
           

                </div>
            </div>

            <div className='flex justify-between px-8 py-2'>
            <div className='text-green-600 font-semibold cursor-pointer' onClick={handleBack}>Back</div>
                <div className='text-green-600 font-semibold cursor-pointer' onClick={handleNext}>Next</div>
            </div>
    </div>
  )
}

export default WhatIsYourWeight