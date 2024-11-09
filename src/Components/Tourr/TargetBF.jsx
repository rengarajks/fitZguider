import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const WhatIsYourTarget = () => {

  const [bf, setBf] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setBf(value);

    if (value > 5 && value <= 20) {  
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const navigate=useNavigate();
 
    const handleBack=()=>{
        navigate('/neck');
    }    
    

  const handleNext = () => {
    if (!flag) {
        localStorage.setItem('target', bf);
        localStorage.setItem('profile',true);

        //Calculations
        let bfPercentage = 0;

        const heightNum = parseFloat(localStorage.getItem('height'));
        const waistNum = parseFloat(localStorage.getItem('weight'));
        const neckNum = parseFloat(localStorage.getItem('neck'));
        const hipNum = parseFloat(localStorage.getItem('hip'));
        console.log('h=',heightNum,'w=',waistNum,'neck=',neckNum,'hip=',hipNum);

        if (localStorage.getItem('gender') === 'true') {
          // Male body fat formula
          bfPercentage = 86.010 * Math.log10(waistNum - neckNum) - 70.041 * Math.log10(heightNum) + 36.76;
        } else {
          // Female body fat formula
          bfPercentage = 163.205 * Math.log10(waistNum + hipNum - neckNum) - 97.684 * Math.log10(heightNum) - 78.387;
        }
      
        localStorage.setItem('bodyFat',bfPercentage.toFixed(2));
        window.location.reload();
    }
    
};




  return (
    <div>
      <div className='flex justify-center py-4 pt-8'>
        <div className=''>
          <div className='flex gap-1'>
            <h1 className='font-semibold flex items-center'>What is your target body fat%?</h1>
            <TextField
              className=' w-[6rem]'
              type='number'
              value={bf}
              onChange={handleChange}
            />
            <h1 className='font-semibold flex items-center'>cm</h1>
          </div>

          {flag && <h1 className='font-semibold text-center text-red-500 pt-4'>Value should between 6 and 20</h1>}
        </div>
      </div>

      <div className='flex justify-between px-8 py-2'>
      <div className='text-green-600 font-semibold cursor-pointer' onClick={handleBack}>Back</div>
        <div className='text-green-600 font-semibold cursor-pointer' onClick={handleNext}>Next</div>
      </div>
    </div>
  );
};

export default WhatIsYourTarget;
