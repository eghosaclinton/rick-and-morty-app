import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import  { FaToggleOff, FaToggleOn, FaSearch, } from 'react-icons/fa'
import { MdDynamicFeed } from "react-icons/md";
import { CiLogin, CiLogout } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import imgPro from '../assets/imgPro.png'
import { Context } from '../context/StateContext'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase/configFirebase'
import { toast } from 'sonner'

const Navbar = () => {
    const [isMenuShown, setIsMenuShown] = useState(!matchMedia("(max-width: 600px)").matches)
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
        <button className='menu' onClick={()=>{
            setIsMenuShown(prev=>!prev)
        }}>
            <IoMenu/>
        </button>
        
        {isMenuShown && 
        <div className='links'>
            <div>
                <Link to='/register'>
                    {!amILoggedIn && <button>Register</button>}
                </Link>
            </div>

            <div>
                <Link to='/login'>
                    {!amILoggedIn && <button><CiLogin/>Login</button>}
                </Link>
            </div>

            <div>
                {amILoggedIn && <button
                 onClick={logoutUser}
                 ><CiLogout />Logout</button>}
            </div>

            <div>
                <Link to='/feed'>
                    <button><MdDynamicFeed />Feed</button>
                </Link>
            </div>

            <div>
                <Link to='/search'>
                    {amILoggedIn && <button><FaSearch />Search</button>}
                </Link>
            </div>

        </div>
        }

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