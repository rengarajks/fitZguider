import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const WhatIsYourWaist = () => {

    const navigate=useNavigate();
 
    const handleBack=()=>{
        navigate('/height');
    }

    const handleNext=()=>{
        console.log("Next from waist...",waist)
             
        if(!flag){
            localStorage.setItem('waist', waist);
        }
        console.log(('fucking waist handling....'))
        console.log('gender=',localStorage.getItem('gender'));
        if(localStorage.getItem('gender')==='true'){
            navigate('/neck');
        }
        else{
            navigate('/hip');
        }
        
    }

    const[waist,setWaist]=useState(0);
    const [flag,setFlag]=useState(false);
    

    const handleChange=(e)=>{
   
        setWaist(e.target.value);
        // console.log('e=',e.target.value)
        // console.log('Curr=',waist);
        if(e.target.value>60 && e.target.value<=150){
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
                    <h1 className='font-semibold flex items-center'>What is your Waist size?</h1>
                    <TextField className=' w-[6rem]' type='number' value={waist} onChange={handleChange}/>
                    <h1 className='font-semibold flex items-center'>cm</h1>
                </div>

                {flag&& <h1 className='font-semibold text-center text-red-500 pt-4'>Enter valid Waist</h1>}
           

                </div>
            </div>

            <div className='flex justify-between px-8 py-2'>
            <div className='text-green-600 font-semibold cursor-pointer' onClick={handleBack}>Back</div>
                <div className='text-green-600 font-semibold cursor-pointer' onClick={handleNext}>Next</div>
            </div>
    </div>
  )
}

export default WhatIsYourWaist