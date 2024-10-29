import { useContext } from 'react'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import DetailProfile from '../components/DetailProfile.tsx'
import Sidebar from '../components/Sidebar.tsx'
import { Context } from '../context/StateContext'
import './searchPage.css'

const SearchPage = () => {
  const { amILoggedIn } = useContext(Context)  
  return (

      <div 
    //   sx={{flexDirection:{sx:'column', md:'row'}}}
        >
        {amILoggedIn && <Sidebar />}
          {/* <Box className='boxSide' sx={{height:{sx:'auto',md:'90vh'}}}>
              
          </Box> */}
          {/* <Box className='boxDetail'>
              {amILoggedIn ? <DetailProfile /> : <h1>Error 404 : Page not found</h1>}
          </Box> */}
      </div>
  )
}

export default SearchPage