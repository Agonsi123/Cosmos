import React from 'react'
import ForgotPassword from '../components/login/ForgotPassword'
import { useState } from 'react'
import Verify from '../components/login/Verify'
import ChangePassword from '../components/login/ChangePassword'

const Password = () => {
    const [password, setPassword] = useState(1)

    const nextSlide = () => {
        setPassword((password) => (password + 1))
        if (password === 3) {
            window.alert('Password Changed, Thank you!')
        }
    }
  return (
    <div className='md:flex gap-4 h-screen'>
    <div className='md:h-full md:w-1/2'>
      <img
        className='h-full object-cover'
        src="https://media.istockphoto.com/id/1161948459/photo/ethiopia-agricultural-land-near-the-blue-nile.jpg?s=612x612&w=0&k=20&c=Qw5LlKbzoltuhJtLafJnzBhxCZH6DO2NOQFsPyHbTKc="
        alt="signimage"
      />
    </div>
    <div className='md:w-1/2 py-14 md:py-0 flex justify-center items-center'>
      {password === 1 && <ForgotPassword nextSlide={nextSlide} />}
      {password === 2 && <Verify nextSlide={nextSlide} />}
      {password === 3 && <ChangePassword nextSlide={nextSlide}/>}
      
    </div>
  </div>
  )
}

export default Password
