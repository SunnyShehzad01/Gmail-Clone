import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import '../styles.css'

const EmailRow = ({id, title, subject, description, time}) => {
  return (
    <div className='emailRow'>
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
                    {description}
                </span>
            </h4>
            
        </div>

        <div className="emailrow-time">
            {time}
        </div>
    </div>
  )
}

export default EmailRow