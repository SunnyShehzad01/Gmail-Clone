import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, Keyboard, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../styles.css'
import EmailSection from './EmailSection'
import EmailRow from './EmailRow'
import { db } from '../firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const EmailList = () => {

  const [emails, setEmails] = useState([])
  const colRef = collection(db, 'emails')
  const q = query(colRef, orderBy('timestamp', 'desc'))

  useEffect(() => {

    //OnSnapshot is used to get the realtime data from firestore.
    onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })
  }, [])

  const emailSectionDetails = [
    {icon: Inbox, title: "Primary", color: "red", selected: true},
    {icon: People, title: "Social", color: "#1a73e8", selected: false},
    {icon: LocalOffer, title: "Promotions", color: "green"}
  ]

  const emailList = [
    {title: "Twitch", subject:"Hey Fellow streamer", description: "This is a test", time:"10pm"},
    {title: "Twitch", subject:"Hey Fellow streamer", description: "This is a test", time:"10pm"},
    {title: "Twitch", subject:"Hey Fellow streamer", description: "This is a test", time:"10pm"}

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

      <div className="emaillist-list">
        {
          emails.map(({id, data: { to, subject, message, timestamp }}) => (
            <EmailRow 
                key={id}
                id={id}
                title={to}
                subject={subject}
                description={message}
                time={ new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          ))
        }
        {/* {
          emailList.map((mail, index) => {
            return (
              <EmailRow key={index} id={index} title={mail.title} subject={mail.subject} description={mail.description} time={mail.time} />
            )
          })
        } */}
      </div>
    </div>
  )
}

export default EmailList