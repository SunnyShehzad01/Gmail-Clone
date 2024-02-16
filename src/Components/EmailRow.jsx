import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import '../styles.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectedMail } from '../features/mailSlice'

const EmailRow = ({id, title, subject, description, time}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(selectedMail({
            title, subject, description, time
        }))

        navigate('/mail')
    }
  return (
    <div onClick={openMail} className='emailRow'>
        <div className="emailrow-options">
            <Checkbox />
            <IconButton>
                <StarBorderOutlined />
            </IconButton>
            <IconButton>
                <LabelImportantOutlined />
            </IconButton>
        </div>

        <div className="emailrow-title">
            {title}
        </div>

        <div className="emailrow-message">
            <h4>
                {subject}
                <span className='emailrow-description'>
                    - {description}
                </span>
            </h4>
            
        </div>

        <p className="emailrow-time">
            {time}
        </p>
    </div>
  )
}

export default EmailRow