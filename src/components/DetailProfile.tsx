import { useEffect, useState, useContext } from 'react'
import { Context } from '../context/StateContext'
import { Link } from 'react-router-dom'
import { useCharacterFilter } from '../hooks/sidebarQL'
import './detailprofile.css'
import { motion } from 'framer-motion'

type Character = {
  id: string,
  image: string,
  name: string,
  status: string,
  species: string
}

export default function DetailProfile (){
    const stateContext = useContext(Context)
    // @ts-expect-error => its keeps giving type any T.T
    const { selected, search } = stateContext
    const name = selected
    
    const [user, setUser] = useState([]);


    const { data, loading, error } = useCharacterFilter(name)
   

    useEffect(() => {
        function fetchUser(){ 
        fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
          .then(response => response.json())
          .then(data => {
            data = data.results
            setUser(data)
          })
        }
        fetchUser();
    }, [search])

    const list = {
      visible: {
        opacity: 1,
        transition:{
          when: 'beforeChildren',
          staggerChildren: 0.3
        }
      },
      hidden: {
        opacity: 0,
        transition:{
          when: 'afterChildren'
        }          
      },
    }

    const variants = {
      visible: (i: number) => ({
        opacity: 1,
        x:0,
        transition: {
          delay: i * 0.3,
        },
      }),
      hidden: () => ({ opacity: 0, x:-100 }),
    }



  return (
    <motion.div 
      initial='hidden'
      animate='visible'
      variants={list} 
      className='detail-card-container'
    >

        {(search == '' && data) && 
          data.characters.results.map((character: Character) => (
          <motion.div 
            custom={character}
            animate='visible'
            initial='hidden'
            variants={variants} 
            whileHover={{
              scale:1.2,
              transition:{duration:0.2}
            }} 
            className='card'
          >
              <img src={character.image} />
              <h3> {character.name} </h3>
              <p>status: {character.status}</p>
              <Link to={`/${character.id}`}>
                <button>Details</button>
              </Link>
              <p>specie: 
                <span  style={{fontSize:'11px'}}>
                  <i>{character.species}</i>
                </span>
              </p>

          </motion.div>
        ))}


        {user && 
          user.map((character: Character) => (
            <motion.div
            custom={character}
            animate='visible'
            initial='hidden'
            variants={variants}
            whileHover={{
              scale:1.2,
              transition:{duration:0.2}
            }}
            className='card'
            >
              <img src={character.image} />
              <h3> {character.name}</h3>
              <p>status: {character.status}</p>
              <Link to={`/${character.id}`}>
                <button>Details</button>
              </Link>
              <p>specie: 
                <span  style={{fontSize:'11px'}}>
                  <i>{character.species}</i>
                </span>
              </p>
            </motion.div>
          ))
        }

    </motion.div>
  )
}