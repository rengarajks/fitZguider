import React, { useState } from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Icon } from '@mui/material'; // Import any icon you want to use
import BoltIcon from '@mui/icons-material/Bolt';

const BodyFatStatus = () => {
  
  // const [bodyFat, setBodyFat] = useState(localStorage.getItem('fat'));

  const settings = {
    width: 120,
    height: 120,
    value: 60, // You may keep this for reference but it won't be visible
  };

  // console.log('bf=',bodyFat)


  return (
    <div className='bg-white px-[5vh] py-[1vh] rounded-md mx-[2vh]'>
      <h1 className='text-center py-2 font-semibold text-lg' style={{ borderBottom: '1px solid #bdbfbe' }}>
        Body Fat
      </h1>
      <div className='flex justify-between lg:px-[50vh] py-2'>
        <div className='flex items-center relative'>
          <Gauge
            {...settings}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                visibility: 'hidden', // Hide the default value text
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#52b202',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: theme.palette.text.disabled,
              },
            })}
          />
          {/* Add Icon over the Gauge */}
          <div className="relative  transform  -translate-x-[210%]">
             <BoltIcon sx={{fontSize:'2.4rem'}}/>
          </div>
        </div>
        <div className='grid grid-cols-2  font-bold gap-2'>
          <div className='grid grid-rows-2'>
            <div className='flex items-center text-gray-600'>Current</div>
            <div className='flex items-center text-gray-600'>Target</div>
          </div>

          <div className='grid grid-rows-2 '>
            <div className='flex items-center'>
              <div className='flex items-end'>
                <h1 className='text-4xl font-semibold'>{localStorage.getItem('bodyFat')||0}</h1>
                <h1 className='font-semibold'>%</h1>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='flex items-end'>
                <h1 className='text-4xl font-semibold'>{localStorage.getItem('target') || 0}</h1>
                <h1 className='font-semibold'>%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyFatStatus;
