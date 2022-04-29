import { useState, useEffect } from 'react'
import { FaVenusMars, FaMapMarkerAlt, FaStarHalfAlt } from 'react-icons/fa';
import InfoField from './InfoField';
import LoadingSpinner from './utils/LoadingSpinner'

function Character(props) {
  const character = props.object
  const [episode, setEpisode] = useState();

  const getFirstEpisode = async (episodeURL) => {
    const response = await fetch(episodeURL)
    const responseJSON = await response.json()
    setEpisode(responseJSON.name)
  }

  useEffect(() => {
    if (!(typeof character.gender == 'undefined')) {
      getFirstEpisode(character.episode[0])
    }
  }, [character]);

  return(
    <>
      { !(typeof character.location == 'undefined') ?
        <div>
          <img src={character.image} className="card-img-top character-img" title={character.name} alt={character.name} />
          <div className="card-body">
            <h5 className="card-title text-uppercase fw-bold text-primary text-truncate" title={character.name}>{character.name}</h5>
            <div className="card-text lh-1">
              <InfoField title='Género' value={character.gender} icon={<FaVenusMars className='w-auto h-auto px-2 col-2' />}></InfoField>
              <InfoField title='Ubicación' value={character.location.name} icon={<FaMapMarkerAlt className='w-auto h-auto px-2 col-2' />}></InfoField>
              { episode ? 
                <InfoField title='Primera aparición' value={episode} icon={<FaStarHalfAlt className='w-auto h-auto px-2 col-2' />}></InfoField> : 
                <LoadingSpinner></LoadingSpinner>
              }
            </div>
          </div>
        </div> : ''
      }
    </>
  )
}

export default Character