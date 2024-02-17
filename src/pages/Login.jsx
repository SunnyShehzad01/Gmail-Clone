import React from 'react'
import '../styles.css'
import { Button, IconButton } from '@mui/material'
import { provider } from '../firebase'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Login = () => {

    const dispatch = useDispatch()
    const auth = getAuth()
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then(({user})=> {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL 
            }))
        })
        .catch(error => console.log(error))
    }

  return (
    <div className='login'>
        <div className="login-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="gmail-icon" />
            <Button
                variant='contained'
                color='primary'
                onClick={() => signIn()
            }>
                signIn with Google
            </Button>
        </div>

        <div className="creator-details">
            <p>Made by <span>SunnyShehzad</span></p>
            <div className="social-icons">
                <Link to={'https://github.com/SunnyShehzad01'} target='_blank'>
                    <IconButton> <GitHub /> </IconButton>
                </Link>
                <Link to={'https://www.linkedin.com/in/shehzad-khan-b83125157/'} target='_blank'>
                    <IconButton> <LinkedIn/> </IconButton>
                </Link>
                <Link to={'https://twitter.com/SunnyShehzad07'} target='_blank'>
                    <IconButton> <Twitter /> </IconButton>
                </Link>
            </div>
            <h6>Connect with me</h6>

            <footer>
                <p>**Disclaimer: This is a UI clone for the Gmail app.**</p>
            </footer>
        </div>
    </div>
  )
}

export default Login