import { toast } from 'sonner'
import { FormEvent, useContext, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from '../firebase/configFirebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import imgPro from '../assets/imgPro.png'
import './LoginPage.css'
import { FcGoogle } from 'react-icons/fc'
import { Context } from '../context/StateContext'
import { motion } from 'framer-motion'

export default function LoginPage(){
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigatePageTo = useNavigate()
  const stateContext = useContext(Context)
  const { setAmILoggedIn } = stateContext  

  function changeEventHandler(target: HTMLInputElement){
    const { value, name } = target;

    setFormData(prev=>{
      return {
        ...prev,
        [name]: value,
      }
    }
    )
  }

  function loginUser(){
    const { email, password } = formData
    toast.promise(async()=>{
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        setAmILoggedIn(true)
        navigatePageTo('/feed')
      }, {
      loading: 'Loading...',
      success: () => {
            return `Login Success`;
      },
      error: 'Login Failed',
      position: 'top-center',
    })
  }

  function submitEventHandler(submitEvent: FormEvent){
    submitEvent.preventDefault();
    loginUser();
  }  

  const signInWithGoogle = () => {
    signInWithPopup(auth,provider)
    .then((result) => {
      toast.success('Login successful')
      setAmILoggedIn(true)
      navigatePageTo('/feed')
    }).catch((err) => {
      toast.error(err.message)
    })
  }


  return (
    <div className='main'>
    <motion.div 
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className='info'>
        <img className='img-form' src={imgPro} width='100px' height='50px'/>
        <p className='bio'><b>Wubba Lubba Dub Dub!</b></p>
        <div className='divBtn'>
        <button onClick={()=>signInWithGoogle()} className='loginWithSocial'>
            <FcGoogle  className='FcGog'/>
            Continue with Google
        </button>
        </div>
        <p className='or'>----------------or-----------------</p>

        <form onSubmit={submitEventHandler}>

          <div className="email">
            <label htmlFor="emailField"></label>
            <input type='email' id='emailField' name='email' value={formData.email} onChange={(e)=>changeEventHandler(e.target)} className='input' placeholder='Enter email address'/>
          </div>

          <div className="password">
            <label htmlFor="passwordField"></label>
            <input type='password' id='passwordField' name='password' value={formData.password} onChange={(e)=>changeEventHandler(e.target)} className='input' placeholder='Enter Password'/>
          </div>

          <button className='continue'>Continue</button>

        </form>

        <div className="userNotYet">
          <p className='noAccount'>Don't have an account?</p>
          <Link to='/register'>
              <button className='create'>Create account</button>
          </Link>
        </div>
    </motion.div>
    </div>
  )
}
