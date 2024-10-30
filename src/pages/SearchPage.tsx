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
      <Stack direction="row" >
        {amILoggedIn && 
          <Box className='boxSide' sx={{height:{sx:'auto',md:'90vh'}}}>
              <Sidebar />
          </Box>
          }
          <Box className='boxDetail'>
              {amILoggedIn ? <DetailProfile /> : <h1>Error 404 : Page not found</h1>}
          </Box>
      </Stack>
  )
}

export default SearchPage