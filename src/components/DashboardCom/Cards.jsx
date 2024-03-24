import React from 'react';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ProgressCircle from './ProgressCircle';

const Cards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-1'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between items-center w-full border p-4 rounded-lg shadow-md'> 

        <div className='flex flex-col w-full pb-4'>
          <Box>
          <Box ml={4}>
            <FaDollarSign size={24} /> 
            </Box>
            <Typography variant="h4" fontWeight="bold">
              8,946
            </Typography>
          </Box>
          <Box ml={1}>
          <p className='text-gray-600'>Daily Revenue</p>
          </Box>
        </div>
        <Box>
          <ProgressCircle progress={29} />
        </Box>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between items-center w-full border p-4 rounded-lg shadow-md'> 

        <div className='flex flex-col w-full pb-4'>
          <Box>
          <Box ml={4}>
            <FaDollarSign size={24} />
            </Box>
            <Typography variant="h4" fontWeight="bold">
              1,437,876
            </Typography>
          </Box>
          <Box ml={1}>
          <p className='text-gray-600'>Yearly Revenue</p>
          </Box>
        </div>
        <Box>
          <ProgressCircle progress={50} /> 
        </Box>
      </div>
      <div className='bg-white flex justify-between items-center w-full border p-4 rounded-lg shadow-md'>
        <div className='flex flex-col w-full pb-4'>
          <Box>
          <Box ml={4}>
            <FaUsers size={24} /> 
            </Box>
            <Typography variant="h4" fontWeight="bold">
              17,438
            </Typography>
          </Box>
          <Box ml={2}>
          <p className='text-gray-600'>Customers</p>
          </Box>
        </div>
        <Box>
          <ProgressCircle progress={18} /> 
        </Box>
      </div>
    </div>
  );
};

export default Cards;