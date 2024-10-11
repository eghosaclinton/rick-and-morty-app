import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import  {FaToggleOff} from 'react-icons/fa'
import {FaToggleOn} from 'react-icons/fa'
import imgPro from '../assets/imgPro.png'
import { Context } from '../context/StateContext'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase/configFirebase'
import { toast } from 'sonner'

const Navbar = () => {
    const stateContext = useContext(Context)
    const { dark, changeMode } = stateContext;
    const { amILoggedIn, setAmILoggedIn } = useContext(Context)

    const navigate = useNavigate()


    onAuthStateChanged(auth,(user) => {
        if(user) {
            setAmILoggedIn(true)
        }
    })

    const logoutUser = () => {
        signOut(auth).then(() => {
            toast.success('Logged out successfully')
            setAmILoggedIn(false)
            navigate('/login')
        }) .catch((error) => {
            toast.error(error.message)
        })
    }



  return (
    <nav>
        <div className='links'>
            <div>
            <Link to='/register'>
                {!amILoggedIn && <button>Register</button>}
            </Link>
            </div>
            <div>
            <Link to='/login'>
                {!amILoggedIn && <button>Login</button>}
            </Link>
            </div>
            <div>
                {amILoggedIn && <button
                 onClick={logoutUser}
                 >Logout</button>}
            </div>
            <div>
            <Link to='/feed'>
            <button>Feed</button>
            </Link>
            </div>
            <div>
            <Link to='/search'>
            {amILoggedIn && <button>search</button>}
            </Link>
            </div>
        </div>
        <div className='toggle' onClick={changeMode}>
            <img src={imgPro} width='100px' height='50px'/>
            {dark ? <FaToggleOff className='bothLD' size={30}/> : 
            <FaToggleOn className='bothLD' size={30}
            />}
        </div>
    </nav>
  )
}

export default Navbar