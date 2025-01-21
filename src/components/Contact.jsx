import React from 'react'
import { CONTACT } from '../constants'
const Contact = () => {
  return (
    <div className='mt-20 mb-10 '>
        <h1 className='text-4xl text-center'>Get in Touch</h1>
        <div className='text-center mt-10'>
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <a href="">{CONTACT.email}</a>
        </div>
    
    </div>
  )
}

export default Contact