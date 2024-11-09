import { Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WhatIsYourWeight from '../Components/Tourr/weight';
import WhatIsYourHeight from '../Components/Tourr/height';
import WhatIsYourWaist from '../Components/Tourr/waist';
import WhatIsYourNeck from '../Components/Tourr/neck';
import WhatIsYourHip from '../Components/Tourr/hip';
import MaleOrFemale from '../Components/Tourr/maleorfemale';
import { Route, Routes } from 'react-router';
import WhatIsYourTarget from '../Components/Tourr/TargetBF';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    Margin:'0vh 10vh',
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: "none",
    overflowY: "auto",
    overflow: "scroll-y",
    borderRadius: 3,
    "&::-webkit-scrollbar": {
        display: "none",  // Hides the scrollbar in webkit browsers
    },
    "-ms-overflow-style": "none",  // Hides the scrollbar in Internet Explorer and Edge
    "scrollbar-width": "none",  // Hides the scrollbar in Firefox
};

const Tour = () => {
    
      
  return (
    <div className=''>
        <h1 className='pt-[25vh] text-center font-bold text-xl'>
            <span className='text-white '>fit</span>
            <span className='text-green-600'>Z</span>
            <span className='text-white'>guider</span>
        </h1> 
        <Box sx={style} >      
            <Routes>
               <Route path='/' element={<MaleOrFemale/>}/>  
               <Route path='/weight' element={<WhatIsYourWeight/>}/>  
               <Route path='/height' element={<WhatIsYourHeight/>}/>  
               <Route path='/waist' element={<WhatIsYourWaist/>}/>    
               <Route path='/hip' element={<WhatIsYourHip/>}/>  
               <Route path='/neck' element={<WhatIsYourNeck/>}/>  
               <Route path='/target' element={<WhatIsYourTarget/>}/>  
            </Routes>           
        </Box>
    </div>
  )
}

export default Tour