import { FaGlobeEurope, FaLayerGroup, FaUsers } from 'react-icons/fa';
import InfoField from './InfoField';
import dateFormat from "dateformat";

function Location(props) {
  const location = props.object
  const dateCreated = new Date(location.created);

  return(
    <>
      { !(typeof location.residents == 'undefined') ? 
        <div className="card-body">
          <h5 className="card-title text-uppercase fw-bold text-primary text-truncate" title={location.name}>{location.name}</h5>
          <div className="card-text">
            <InfoField title='Tipo' value={location.type} icon={<FaGlobeEurope className='w-auto h-auto px-2 col-2' width='24px' />}></InfoField>
            <InfoField title='Dimensión' value={location.dimension} icon={<FaLayerGroup className='w-auto h-auto px-2 col-2' width='24px' />}></InfoField>
            <InfoField title='Cantidad de residentes' value={location.residents.length} icon={<FaUsers className='w-auto h-auto px-2 col-2' width='24px' />}></InfoField>
            <InfoField title='Fecha de creación' value={dateFormat(dateCreated, "dd-m-yyyy, h:MM TT")} icon={<FaUsers className='w-auto h-auto px-2 col-2' width='24px' />}></InfoField>
          </div>
        </div> : ''
      }
    </>
  )
}

export default Location