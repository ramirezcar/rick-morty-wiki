
import { ReactComponent as WaitingBrandSVG } from '../../assets/waiting-moon.svg'

function WaitingBrand(selectedTextResource) {
  return ( 
    <div className='row justify-content-center'>
      <h1 className='fw-light mb-1 text-center opacity-25 row col-8'>{"Escribe un recurso en el buscador y aparecerá aquí..."}</h1>
      <div className='row justify-content-center'>
        <WaitingBrandSVG /> 
      </div>
    </div>
   );
}

export default WaitingBrand;