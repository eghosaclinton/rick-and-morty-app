import { useEffect, useState, useContext } from 'react'
// import { useCharacters } from '../custom Hooks/sidebarQL'
import './detailprofile.css'
import { Context } from '../context/StateContext'
import { useQuery, gql } from "@apollo/client"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const GET_CHARACTER_GENDER = gql`
    query GetCharacterLocations($name: String!){
        characters(filter: {gender:$name }) {
            results{
                # gender{
                    id
                    image
                    name
                    status
                    species
                # }
            }
        }
    }
`

// const GET_CHARACTER_SPECIE = gql`
//     query GetCharacterLocations($name: String!){
//         characters(filter: {name:$name }) {
//             results{
//                 # gender{
//                     image
//                     name
//                     status
//                     species
//                 # }
//             }
//         }
//     }
// `

// export const useCharacters = () => {
//     const {error,loading,data} = useQuery(GET_CHARACTERS)
//     return {
//         error,
//         data,
//         loading
//     }
// }

const DetailProfile = () => {
    const stateContext = useContext(Context)
    const { selected, search, setSearch} = stateContext
    const name = selected
    
    const [user, setUser] = useState([]);
 
    const { loading, error, data } = useQuery(GET_CHARACTER_GENDER,{
        variables:{
            name
        }
    })
   

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
        visible: {opacity: 1,
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
        visible: i => ({
          opacity: 1,
          x:0,
          transition: {
            delay: i * 0.3,
          },
        }),
        hidden: i => ({ opacity: 0, x:-100 }),
      }



  return (
    <motion.div initial='hidden'
    animate='visible'
    variants={list} className='detail-card-container'>
    {/* {search == '' && data && data.characters.results.map((i) => (
    <motion.div custom={i}
    animate='visible'
    initial='hidden'
    variants={variants} whileHover={{
        scale:1.2,
        transition:{duration:0.2}
    }} className='card'>
        <img src={i.image} />
        <h3> {i.name}</h3>
        <p>status: {i.status}</p>
        <Link to={`/${i.id}`}><button>Details</button></Link>
        <p>specie: <span  style={{fontSize:'11px'}}><i>{i.species}</i></span></p>
    </motion.div>))} */}
    {/* {user && user.map((i) => (
    <motion.div custom={i}
    animate='visible'
    initial='hidden'
    variants={variants} whileHover={{
        scale:1.2,
        transition:{duration:0.2}
    }} className='card'>
        <img src={i.image} />
        <h3> {i.name}</h3>
        <p>status: {i.status}</p>
        <Link to={`/${i.id}`}><button>Details</button></Link>
        <p>specie: <span  style={{fontSize:'11px'}}><i>{i.species}</i></span></p>
    </motion.div>))} */}
    </motion.div>
  )
}

export default DetailProfile