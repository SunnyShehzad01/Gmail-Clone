import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles.css'
import { useSelector } from 'react-redux'
import { selectOpenMail } from '../features/mailSlice'

const Mail = () => {
  const navigate = useNavigate()
  const mailDetails = useSelector(selectOpenMail)

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

      <div className="mail-body">
        <div className="mail-body-header">
          <h2>{mailDetails?.subject}</h2>
          <LabelImportant className='mail-important-icon' />
          <p>{mailDetails?.title}</p>
          <p className='mail-time'>{mailDetails?.time}</p>
        </div>

        <div className="mail-message">
          <p>{mailDetails?.description}</p>
        </div>
      </div>


    </div>
  )
}

export default Mail