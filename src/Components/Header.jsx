import React from 'react'
import '../styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Apps, ArrowDropDown, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { getAuth, signOut } from 'firebase/auth';

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const auth = getAuth()

    const signingOut = () => {
        signOut(auth)
        .then(()=>{
            dispatch(logout())
        })
        .catch(error => console.log(error))
    }

  return (
    <div className='header'>
        <div className="header-left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png"
                alt="" 
                onClick={() => navigate('/')}
            />
        </div>
        <div className="header-middle">
            <SearchIcon />
            <input type="text" placeholder='Search mail' />
            <ArrowDropDown className='header-dropdownIcon' />
        </div>
        <div className="header-right">
            <IconButton > <Apps /> </IconButton>
            <IconButton> <Notifications /> </IconButton>
            <div className="signout">
                <Avatar onClick={signingOut} src={user?.photoUrl} />
                <p>SignOut</p>
            </div>
        </div>
    </div>
  )
}

export default Header