import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Register from './pages/Register.tsx'
import LoginPage from './pages/LoginPage.tsx'
import Feed from './pages/Feed.tsx'
import SearchPage from './pages/SearchPage.tsx';
import FullProfileDetail from './components/FullProfileDetail.tsx';


export default function App() {
  
  return (
    <BrowserRouter>      
        <div className="App">
          <Navbar />          
          <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/feed' element={<Feed />}/>
            <Route path='/search' element={<SearchPage />}/>
            <Route path='/:id' element={<FullProfileDetail />} /> 
          </Routes>
        </div>  
    </BrowserRouter>
  )
}
