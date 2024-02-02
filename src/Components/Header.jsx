import React from 'react'
import '../styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Apps, ArrowDropDown, Notifications } from '@mui/icons-material';

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png"
                alt="" 
            />
        </div>
        <div className="header-middle">
            <SearchIcon />
            <input type="text" placeholder='Search mail' />
            <ArrowDropDown className='header-dropdownIcon' />
        </div>
        <div className="header-right">
            <IconButton >
                <Apps />
            </IconButton>
            <IconButton>
                <Notifications />
            </IconButton>
            <Avatar />
        </div>
    </div>
  )
}

export default Header