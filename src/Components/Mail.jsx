import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles.css'

const Mail = () => {
  const navigate = useNavigate()
  return (
    <div className='mail'>
      <div className="mail-tools">
        <div className="mail-tools-left">
          <IconButton onClick={() => navigate('/')}> <ArrowBack /> </IconButton>
          <IconButton> <MoveToInbox/> </IconButton>
          <IconButton> <Error /> </IconButton>
          <IconButton> <Delete /> </IconButton>
          <IconButton> <Email /> </IconButton>
          <IconButton> <WatchLater /> </IconButton>
          <IconButton> <CheckCircle /> </IconButton>
          <IconButton> <LabelImportant /> </IconButton>
          <IconButton> <MoreVert /> </IconButton>
        </div>

        <div className="mail-tools-right">
          <IconButton> <UnfoldMore /> </IconButton>
          <IconButton> <Print /> </IconButton>
          <IconButton> <ExitToApp /> </IconButton>
        </div>
      </div>

      <h1>Sunny Shehzad</h1>
    </div>
  )
}

export default Mail