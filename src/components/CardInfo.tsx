import { Link } from 'react-router-dom'
import './CardInfo.css'

type CardInfoProps={
  name: string,
  img: string,
  status: string,
  created: string,
  id: number
}

const CardInfo = ( { name, img, status, created, id}: CardInfoProps ) => {
  return (
    <div className='card-container'>
      <div className='card'>

          <img src={img} />

          <h3> 
            {name} 
          </h3>

          <p>
            status: {status}
          </p>
          
          <Link to={`/${id}`}>
            <button>Details</button>
          </Link>

          <p>
            Created: 
            <span  style={{fontSize:'11px'}}>
              <i>{created}</i>
            </span>
          </p>
      </div>
    </div>
  )
}

export default CardInfo