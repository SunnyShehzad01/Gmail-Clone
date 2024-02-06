import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import '../styles.css'
import { useNavigate } from 'react-router-dom'

const EmailRow = ({id, title, subject, description, time}) => {
    const navigate = useNavigate()
  return (
    <div onClick={ () => navigate(`/mail`)} className='emailRow'>
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