import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Margin } from '@mui/icons-material';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
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

export default function InputModal({ open, handleClose }) {

    


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >

                <div className='flex justify-start px-8 py-2'>
                    <div className='text-green-600 font-semibold'>Progress</div>
                   </div>

                   <h1 className='text-center'>Enter your current progress</h1>
                   
                   <div className='flex justify-center py-4'>
                    <div className=''>
                    <div className='flex gap-2 mb-4'>
                        <h1 className='flex items-center font-semibold'>Weight</h1>
                        <TextField className=' w-[6rem]'  />
                    </div>
                    <div className='flex gap-2 ml-3'>
                        <h1 className='flex items-center font-semibold'>Waist</h1>
                        <TextField className=' w-[6rem]' />
                    </div>

                    </div>
                   </div>

                   <div className='flex justify-end px-8 py-2'>
                    <div className='text-green-600 font-semibold'>OK</div>
                   </div>
                   
                </Box>
            </Modal>
        </div>
    );
}
