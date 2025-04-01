import React from 'react';
import SignUpForm from '../components/signup/SignUpForm';

const SignUp = () => {
  return (
    <div className='md:flex min-h-screen'>
      
      <div className='flex-1'>
        <img
          className='h-full w-full object-cover'
          src="https://media.istockphoto.com/id/1161948459/photo/ethiopia-agricultural-land-near-the-blue-nile.jpg?s=612x612&w=0&k=20&c=Qw5LlKbzoltuhJtLafJnzBhxCZH6DO2NOQFsPyHbTKc="
          alt="signimage"
        />
      </div>
      
      
      <div className='flex-1 px-8 flex justify-center items-center'>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
