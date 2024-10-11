import { Link } from 'react-router-dom'
import './CardInfo.css'

const CardInfo = ( { name, img, status, created, id} ) => {
  return (
    <div className='card-container'>
    <div className='card'>
        <img src={img} />
        <h3> {name}</h3>
        <p>status: {status}</p>
        <Link to={`/${id}`}><button>Details</button></Link>
        <p>created: <span  style={{fontSize:'11px'}}><i>{created}</i></span></p>
    </div>
    </div>
  )
}

export default CardInfo