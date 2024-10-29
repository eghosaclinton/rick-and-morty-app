import { FormEvent, useState } from 'react'
import { auth } from '../firebase/configFirebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'sonner'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import imgPro from '../assets/imgPro.png'
import { motion } from 'framer-motion'

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const navigatePageTo = useNavigate()

  function changeEventHandler(target: HTMLInputElement){
      const { value, name } = target;

      setFormData(prev=>{
        return {
          ...prev,
          [name]: value,
        }
      })
  }

  function registerUser(submitEvent: FormEvent){
    submitEvent.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // console.log(userCredential)
      toast.success('Registered succesfully')
      navigatePageTo('/login')
    })
    .catch((error) => {
      console.error(error)
      toast.error('Failed, try again')
    })
  }

  return (
    <div className='nav-main'>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='nav-info'
      >
        <img className='reg-img-form' src={imgPro} width='100px' height='50px'/>
        <p className='bio'>Wubba Lubba Dub Dub!</p>
        {/* <div className='divBtn'>
        <button className='loginWithSocial'>
            <FcGoogle className='FcGog'/>
            Continue with Google</button>
        <button className='loginWithSocial'>
            <MdEmail className='FcGog'/>
            Continue with Email</button>
        </div> */}

        <form onSubmit={registerUser}>
          <div className="email">
            <label htmlFor="emailField">Enter Email: </label>
            <input id='emailField' name='email' value={formData.email}
                onChange={(e) => changeEventHandler(e.target)} className='input'
                type='email' placeholder='Enter email' 
            />
          </div>

          <div className="password">
            <label htmlFor="passwordField">Set a Password: </label>
            <input id='passwordField' 
              name='password' value={formData.password} onChange={(e) => changeEventHandler(e.target)}
              className='input' type='password' placeholder='Set password'
            />
            <p className='exclaims'>pasword must contain a letter,num and special character and be between 8-20 characters.</p>
          </div>

          <div className="confirmPassword">
            <label htmlFor="confirmPasswordField">Confirm Password: </label>
            <input id='confirmPasswordField' 
              name='confirmPassword' value={formData.confirmPassword}
              onChange={(e) => changeEventHandler(e.target)} className='cp'
              type='password' placeholder='Confirm password'
            />
            <p className='exclaim'>must be same with password</p>
          </div>

          <button className='continue'>Register</button>

        </form>

        <div className="userAlready">
          <p>Have an account already?</p>
          <Link to='/login'>
              <button>Login</button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

