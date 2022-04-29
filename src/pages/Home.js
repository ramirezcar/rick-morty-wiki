import { useState, useEffect } from 'react'
import Card from '../components/Card'
import WaitingBrand from '../components/utils/WaitingBrand'
import { FaSearch } from 'react-icons/fa';
import { fetchAPI } from '../services/fetchResource';

function Home() {
  const [data, setData] = useState([]);
  const [selectedTextResource, setSelectedTextResource] = useState();
  const [selectedResource, setSelectedResource] = useState(1);
  const [noResult] = useState();
  const [searchValue, setSearchValue] = useState('');
  const resourceNames = ['Personaje', 'Ubicación', 'Episodio']

  // Manejador de tipeo en input de busqueda
  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
  }

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        // Criterio para buscar, 2 o mas caracteres
        if (searchValue.length > 3) {
          const fetch = await fetchAPI(selectedResource, searchValue);
          setData(fetch);
        }
      }
    fetchData();
    }, 500);
    // console.log(data);
  }, [searchValue, selectedResource]);

  // Manejador de cambio en select Recurso
  function handleSelectChange(e) {
    const selected = e.target.options[e.target.selectedIndex]
    const selectedIndex = selected.value
    setSelectedTextResource(selected.innerText)
    setSelectedResource(selectedIndex)
  }

  return (
    <>
      <nav className="container-lg navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse text-uppercase">
            <div className="navbar-nav fw-normal me-3">
              <a className={"nav-link"} href="/">Inicio</a>
            </div>
          </div>
          <div className="row col-md-6 pb-2">
            <div className="col-md-8 pt-2">
              <div className="input-group input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder={"Buscar "+ (selectedTextResource ? selectedTextResource : '').toLocaleLowerCase()} 
                  value={searchValue} aria-label="Busca algo sobre la serie." 
                  onChange={handleInputChange} 
                  aria-describedby="basic-addon2" 
                />
                <span className="input-group-text" >{<FaSearch color='#white' className='' />}</span>
              </div>
            </div>
            <div className="col-md-4 pt-2">
              <select className="form-select form-select" defaultValue="1" onChange={handleSelectChange} aria-label=".form-select-lg example">
                { resourceNames.map((name, index) => {
                  return <option value={index+1} key={index}>{name}</option>
                }) }
              </select>
            </div>
          </div>
        </div>
      </nav>

      <section className="container-xl my-5">
        <div className="py-2 row">
          { data ? 
            <h3 className='fw-light text-uppercase mb-3'>Resultados</h3> : ''
          }
          { data?.length ?
            data.map((object, index) => {
              let staticResourceType = selectedResource
              return (
                <Card colSize={4} object={object} index={index} resourceType={staticResourceType} key={index}></Card>
              )
            }) 
          : 
            <WaitingBrand selectedTextResource={selectedTextResource} />
          }
        </div>
      </section>
    </>
  );
}

export default Home;