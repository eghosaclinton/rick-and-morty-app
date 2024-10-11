import { useParams } from 'react-router-dom'
import'./FullProfileDetail.css'
import { useCharacter } from '../custom Hooks/character'



const FullProfileDetail = () => {
    const { id } = useParams()

    const { data, loading, error } = useCharacter(id)

    console.log(data)
    

  return (
    <div className='fullProfile'>
        <div className='img-container'>
            <img src={data && data.character.image} className='fullImg' alt='person-img' />
        </div>
        <div className='text-container'>
            <h2 className='textCon'><i>Name:    </i><span>{data && data.character.name}</span></h2>
            <h2 className='textCon'><i>Status:  </i> <span>{data && data.character.status}</span></h2>
            <h2 className='textCon'><i>Species: </i> <span>{data && data.character.species}</span></h2>
            <h2 className='textCon'><i>Origin:  </i> <span>{data && data.character.gender}</span></h2>
            <h2 className='textCon'><i>Location:</i> <span>{data && data.character.location.name}</span></h2>
            <h2 className='textCon'><i>Created: </i><span>{data && data.character.created}</span></h2>
        </div>
    </div>
  )
}

export default FullProfileDetail