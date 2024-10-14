import FallBack from '../components/FallBack.tsx';
import { useCharacters } from '../custom Hooks/feedQL.ts'
import CardInfo from '../components/CardInfo.tsx'
import './feed.css'
import { Context } from '../context/StateContext.tsx';
import { useContext } from 'react';
import { motion } from 'framer-motion';

function Feed() {
  const { loading, error, data } = useCharacters()
  const stateContext = useContext(Context)

  const { amILoggedIn } = stateContext

  return (
    <div className='scrollPage'>
      <h2>CHARACTERS: 826 LOCATIONS: 126 EPISODES: 51</h2>
      {amILoggedIn ? 
        <motion.div
          initial={{y:500}}
          animate={{ y:0 }}
          transition={{ease:'easeOut',duration:1}}
        >
          <div className='cardDeck'>
            {data ? 
              data.characters.results.map(character => (
                <CardInfo key={character.id} id={character.id} created={character.created}
                          // itemId={character.id}   
                    name={character.name} status={character.status} img={character.image}
                 />
              ))
              : 
              <FallBack />
            }
          </div>
        </motion.div> 
      :

        <h1>Error 404: Page not found</h1>
      
      }
    </div>
  );
}

export default Feed;
