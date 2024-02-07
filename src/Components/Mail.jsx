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

      <div className="mail-body">
        <div className="mail-body-header">
          <h2>Subject</h2>
          <LabelImportant className='mail-important-icon' />
          <p>Title</p>
          <p className='mail-time'>10pm</p>
        </div>

        <div className="mail-message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, esse eum necessitatibus ab eius delectus, officia eligendi blanditiis nesciunt numquam reiciendis. Doloremque porro libero doloribus culpa ut, laboriosam perferendis numquam voluptates impedit ipsam quos, sit est quibusdam expedita sed reprehenderit provident consequatur dicta, necessitatibus molestias eveniet itaque! Laborum, reprehenderit! Ullam neque amet dicta fugiat pariatur non dolorum explicabo dolore, alias placeat cupiditate rerum unde veritatis consectetur tempore dolorem sapiente numquam quod aperiam. Pariatur doloremque voluptas vitae harum autem illo veniam quos quibusdam non? Fuga, ullam quas? Voluptatem earum adipisci reiciendis maxime pariatur, accusantium molestiae tempora nulla ipsum eaque quam fugiat.
          </p>
        </div>
      </div>


    </div>
  )
}

export default Mail