import { useCharacters } from '../custom Hooks/feedQL.ts'
// import {ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'
import CardInfo from '../components/CardInfo.tsx'
import './feed.css'
import { Context } from '../context/StateContext.tsx';
// import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';
import { useContext } from 'react';
import { motion } from 'framer-motion';


// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <span   onClick={() => scrollPrev()} className="left-arrow">
//     <FaArrowCircleLeft/>
//     </span>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <FaArrowCircleRight  onClick={() => scrollNext()} className="right-arrow"/>
//   );
// };


function Feed() {
  const { loading, error, data } = useCharacters()
  console.log(data)
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
          style={{overflow: 'hidden'}}
        >
          <div className='cardDeck'>
            {data && data.characters.results.map(character => (
              <CardInfo key={character.id} id={character.id} created={character.created}
                        // itemId={character.id}   
                  name={character.name} status={character.status} img={character.image}
               />
            ))}
          </div>
        </motion.div> 
      :

        <h1>Error 404: Page not found</h1>
      
      }
    </div>
  );
}

export default Feed;
