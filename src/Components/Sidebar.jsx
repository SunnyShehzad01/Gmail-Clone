import React from 'react'
import '../styles.css'
import { Button, IconButton } from '@mui/material'
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material'
import SidebarOptions from './SidebarOptions'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../features/mailSlice'


const Sidebar = () => {
    const dispatch = useDispatch()
    const sideOptions = [
        { icon: Inbox, title: "Inbox", number: 54,selected: true },
        { icon: Star, title: "Starred", number: 20,selected: false },
        { icon: AccessTime, title: "Snoozed", number: 32, selected: false },
        { icon: LabelImportant, title: "Important", number: 21, selected: false },
        { icon: NearMe, title: "Sent", number: 33, selected: false },
        { icon: Note, title: "Drafts", number: 45, selected: false },
        { icon: ExpandMore, title: "More", number: 23, selected: false }
    ]
  return (
    <div className='sidebar'>
        <Button startIcon={<Add fontSize='large' />} className='sidebar-compose' onClick={() => dispatch(openSendMessage())}>
            Compose
        </Button>

        {
            sideOptions.map((option, index) => {
                return (
                    <SidebarOptions 
                        key={index}
                        Icon={option.icon}
                        title={option.title}
                        number={option.number}
                        selected={option.selected}
                    />
                )
            })
        }

        <div className="sidebar-footer">
            <div className="sidebar-footer-icons">
                <IconButton>
                    <Person />
                </IconButton>
                <IconButton>
                    <Duo />
                </IconButton>
                <IconButton>
                    <Phone />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar