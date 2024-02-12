import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import '../styles.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'

const SendMail = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm({
        defaultValues: {
            to: '',
            subject: '',
            message: ''
        }
    })
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div className='sendMail'>
        <div className="sendMail-header">
            <h3>New Message</h3>
            <div onClick={() => dispatch(closeSendMessage())}>
                <Close className='sendMail-close'/ >
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                name='to' 
                type="email" 
                placeholder='To' 
                className='sendMail-to' 
                {...register("to", { required: true })}  
            />
            <input 
                name='subject' 
                type="text" 
                placeholder='Subject' 
                className='sendMail-subject' 
                {...register("subject", { required: true })} 
            />
            {/* <input type="text" placeholder='CC' className='sendMail-cc' /> */}
            <input 
                name='message' 
                type="text" 
                placeholder='Message' 
                className='sendMail-message' 
                {...register("message", { required: true })} 
            />

            <div className="sendMail-options">
                <Button 
                    className='semdMail-send-btn'
                    variant='contained'
                    color='primary'
                    type='submit'
                    >
                        Send
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail