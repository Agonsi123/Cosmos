
import LoginForm from '../components/login/LoginForm'


const Login = () => {
  
  return (
    <div className='md:flex gap-4 h-screen'>
   
      <div className='h-full md:w-1/2'>
        <img
          className='h-full object-cover'
          src="https://media.istockphoto.com/id/1161948459/photo/ethiopia-agricultural-land-near-the-blue-nile.jpg?s=612x612&w=0&k=20&c=Qw5LlKbzoltuhJtLafJnzBhxCZH6DO2NOQFsPyHbTKc="
          alt="signimage"
        />
      </div>
      <div className='md:w-1/2 flex justify-center items-center'>
        <LoginForm />
        
      </div>
    </div>
  )
}

export default Login
