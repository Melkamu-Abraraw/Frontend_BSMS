import React from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
  return (
    
    <div className='flex justify-between px-4 pt-4'>
    <div className="flex items-center">
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor="white"
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </div>
    <Box display="flex" justifyContent="space-between" p={2}>

        {/* ICONS */}
        <Box display="flex">
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
