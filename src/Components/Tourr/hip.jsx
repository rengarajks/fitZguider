import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const WhatIsYourHip = () => {
  
  const [hip, setHip] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setHip(value);

    if (value > 40 && value <= 180) {  // Example range for hip measurement
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const navigate=useNavigate();
 
    const handleBack=()=>{
        navigate('/waist');
    }

  const handleNext = () => {
    if (!flag) {
        localStorage.setItem('hip', hip);
    }
    navigate('/neck');
  };

  return (
    <div>
      <div className='flex justify-center py-4 pt-8'>
        <div className=''>
          <div className='flex gap-1'>
            <h1 className='font-semibold flex items-center'>What is your hip measurement?</h1>
            <TextField
              className=' w-[6rem]'
              type='number'
              value={hip}
              onChange={handleChange}
            />
            <h1 className='font-semibold flex items-center'>cm</h1>
          </div>

          {flag && <h1 className='font-semibold text-center text-red-500 pt-4'>Enter valid hip measurement</h1>}
        </div>
      </div>

      <div className='flex justify-between px-8 py-2'>
      <div className='text-green-600 font-semibold cursor-pointer' onClick={handleBack}>Back</div>
        <div className='text-green-600 font-semibold cursor-pointer' onClick={handleNext}>Next</div>
      </div>
    </div>
  );
};

export default WhatIsYourHip;
