import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const WhatIsYourNeck = () => {

  const [neck, setNeck] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setNeck(value);

    if (value > 20 && value <= 50) {  
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const navigate=useNavigate();
 
    const handleBack=()=>{
      if(localStorage.getItem('gender')==='true'){
        navigate('/waist');
    }
    else{
        navigate('/hip');
    }
    }    
    

  const handleNext = () => {
    if (!flag) {
        localStorage.setItem('neck', neck);
        navigate('/target');
    }
    
};




  return (
    <div>
      <div className='flex justify-center py-4 pt-8'>
        <div className=''>
          <div className='flex gap-1'>
            <h1 className='font-semibold flex items-center'>What is your neck measurement?</h1>
            <TextField
              className=' w-[6rem]'
              type='number'
              value={neck}
              onChange={handleChange}
            />
            <h1 className='font-semibold flex items-center'>cm</h1>
          </div>

          {flag && <h1 className='font-semibold text-center text-red-500 pt-4'>Enter valid neck measurement</h1>}
        </div>
      </div>

      <div className='flex justify-between px-8 py-2'>
      <div className='text-green-600 font-semibold cursor-pointer' onClick={handleBack}>Back</div>
        <div className='text-green-600 font-semibold cursor-pointer' onClick={handleNext}>Next</div>
      </div>
    </div>
  );
};

export default WhatIsYourNeck;
