import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, Keyboard, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import '../styles.css'
import EmailSection from './EmailSection'

const EmailList = () => {
  const emailSectionDetails = [
    {icon: Inbox, title: "Primary", color: "red", selected: true},
    {icon: People, title: "Social", color: "#1a73e8", selected: false},
    {icon: LocalOffer, title: "Promotions", color: "green"}
  ]
  return (
    <div className='emailList'>
      <div className="emailList-settings">
        <div className="emailList-settings-left">
          <Checkbox />
          <IconButton > <ArrowDropDown /> </IconButton>
          <IconButton> <Redo /> </IconButton>
          <IconButton> <MoreVert /> </IconButton>
        </div>

        <div className="email-settings-right">
          <IconButton> <ChevronLeft/> </IconButton>
          <IconButton> <ChevronRight/> </IconButton>
          <IconButton> <Keyboard /> </IconButton>
          <IconButton> <Settings /> </IconButton>
        </div>
      </div>

      <div className='emailList-sections'>
        {
          emailSectionDetails.map((detail, index) => {
            return (
              <EmailSection key={index} Icon={detail.icon} title={detail.title} color={detail.color} selected={detail.selected} />
            )
          })
        }
      </div>
    </div>
  )
}

export default EmailList