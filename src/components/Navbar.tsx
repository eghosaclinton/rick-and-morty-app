import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import  { FaToggleOff, FaToggleOn, FaSearch, } from 'react-icons/fa'
import { MdDynamicFeed } from "react-icons/md";
import { CiLogin} from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import imgPro from '../assets/imgPro.png'
import { Context } from '../context/StateContext'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase/configFirebase'
import { MdLogout } from "react-icons/md";
import { toast } from 'sonner'

const Navbar = () => {
    const [isMenuShown, setIsMenuShown] = useState(0)
    const stateContext = useContext(Context)
    const { dark, changeMode } = stateContext;
    const { amILoggedIn, setAmILoggedIn } = useContext(Context)

    const navigatePageTo = useNavigate()


    onAuthStateChanged(auth,(user) => {
        if(user) {
            setAmILoggedIn(true)
        }
    })

    const logoutUser = () => {
        signOut(auth).then(() => {
            toast.success('Logged out successfully')
            setAmILoggedIn(false)
            navigatePageTo('/login')
        }) .catch((error) => {
            toast.error(error.message)
        })
    }


  return (
    <nav>
        <div className="nav--links">
            <button className='menu' onClick={()=>{
                setIsMenuShown(count => count + 1)
                
            }}>
                <IoMenu className='menu--icon'/>
            </button>
        
            <div className='links'>
                {!amILoggedIn && 
                <div>
                   <Link to='/register'>
                        <button>Register</button>
                   </Link>
                </div>
                }

                {!amILoggedIn && 
                <div>
                    <Link to='/login'>
                        <button><CiLogin/>Login</button>
                    </Link>
                </div>
                }

                {amILoggedIn &&   
                <div>
                    <button onClick={logoutUser}>
                        <MdLogout />
                        Logout
                    </button>
                </div>
                }

                <div>
                    <Link to='/feed'>
                        <button><MdDynamicFeed />Feed</button>
                    </Link>
                </div>

               {amILoggedIn && 
                 <div>
                    <Link to='/search'>
                        <button><FaSearch />Search</button>
                    </Link>
                 </div>
               }

            </div>

           {isMenuShown % 2 !== 0 && 
             <div className='ze--links'>
             {!amILoggedIn && 
             <div>
                <Link to='/register'>
                     <button>Register</button>
                </Link>
             </div>
             }

             {!amILoggedIn && 
             <div>
                 <Link to='/login'>
                     <button><CiLogin/>Login</button>
                 </Link>
             </div>
             }

             {amILoggedIn &&   
             <div>
                 <button onClick={logoutUser}>
                    <MdLogout />
                     Logout
                 </button>
             </div>
             }

             <div>
                 <Link to='/feed'>
                     <button><MdDynamicFeed />Feed</button>
                 </Link>
             </div>

            {amILoggedIn && 
              <div>
                 <Link to='/search'>
                     <button><FaSearch />Search</button>
                 </Link>
              </div>
            }

            </div>
           }
           
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