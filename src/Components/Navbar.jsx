import React from 'react'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import InputModal from './InputModal';
import { IconButton } from '@mui/material';

const Navbar = () => {
  const [openInputMOdal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
<>
<div className='text-white flex justify-between items-center mx-[2vh] py-4'>
        <div>
        <h1 className='font-bold'>
          <span>fit</span>
          <span className='text-purple-600'>Z</span>
          <span>guider</span>
        </h1>
        </div>

        <div>
        <IconButton onClick={handleOpenModal}>
        <FreeBreakfastIcon sx={{color:'white'}}/>
        </IconButton>
        </div>
    </div>

    <section>
      <InputModal open={openInputMOdal} handleClose={handleCloseModal}/>
    </section>
</>
  )
}

export default Navbar