import { toast } from 'sonner'
import { FormEvent, useContext, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/configFirebase'
// import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import imgPro from '../assets/imgPro.png'
import './LoginPage.css'
import {FcGoogle} from 'react-icons/fc'
import {MdEmail} from 'react-icons/md'
import { Context } from '../context/StateContext'
import { motion } from 'framer-motion'

const LoginPage = () => {

  const navigate = useNavigate()
  const stateContext = useContext(Context)
  const { setAmILoggedIn } = stateContext

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange(target: HTMLInputElement){
    const { value, name } = target;

    setFormData(prev=>{
      return {
        ...prev,
        [name]: value,
      }
    }
    )
  }

  const login = () => {
    const { email, password } = formData
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      toast.success('Login successful')
      setAmILoggedIn(true)
      navigate('/feed')
    }).catch((err) => {
      toast.error(err.message)
    })
  }

  function handleSubmit(e: FormEvent){
    e.preventDefault();
    login()
  }

  

  // const signInWithGoogle = () => {
  //   signInWithPopup(auth,provider)
  //   .then((result) => {
  //     toast.success('Login successful')
  //     setAmILoggedIn(true)
  //     navigate('/feed')
  //   }).catch((err) => {
  //     toast.error(err.message)
  //   })
  // }


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
        <button onClick={()=>console.log('hry')} className='loginWithSocial'>
            <FcGoogle  className='FcGog'/>
            Continue with Google</button>
        <button className='loginWithSocial'>
            <MdEmail className='FcGog'/>
            Continue with Email</button>
        </div>
        <p className='or'>----------------or-----------------</p>

        <form onSubmit={handleSubmit}>

          <div className="email">
            <label htmlFor="emailField"></label>
            <input type='email' id='emailField' name='email' value={formData.email} onChange={(e)=>handleChange(e.target)} className='input' placeholder='Enter email address'/>
          </div>

          <div className="password">
            <label htmlFor="passwordField"></label>
            <input type='password' id='passwordField' name='password' value={formData.password} onChange={(e)=>handleChange(e.target)} className='input' placeholder='Enter Password'/>
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

export default LoginPage