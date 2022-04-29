import { FaVideo, FaHashtag, FaRegClock } from 'react-icons/fa';
import InfoField from './InfoField';
import ModalDetails from './ModalDetails';
import dateFormat from "dateformat";

function Episode(props) {
  const episode = props.object
  const dateCreated = new Date(episode.air_date);

  return(
    <>
      { !(typeof episode?.air_date == 'undefined') ? 
        <div className="card-body">
          <h5 className="card-title text-uppercase fw-bold text-primary text-truncate" title={episode.name}>{episode.name}</h5>
          <div className="card-text">
            <InfoField title='Fecha de emisión' value={dateFormat(dateCreated, "dd-m-yyyy")} icon={<FaRegClock className='w-auto h-auto px-2 col-2' width='24px' />}></InfoField>
            <InfoField title='Código' value={episode.episode} icon={<FaHashtag className='w-auto h-auto px-2 col-2' width='24px' />}></InfoField>
          </div>
          <div className='d-flex justify-content-between flex-row mt-3'>
            <FaVideo color='#F1EAF0' className='h-auto px-2 rounded-1 col-2 icon-lg' />
            <ModalDetails episode={episode} />
          </div>
        </div> 
        : ''
      }
    </>
  )
}

export default Episode