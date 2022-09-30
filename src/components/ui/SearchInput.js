import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedResource, setSelectedResource] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const resourceNames = ['Personaje', 'Ubicación', 'Episodio']

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.length > 3) {
      setSearchParams({ query: searchValue, resource: selectedResource });
    }
  }

  // Manejador de tipeo en input de busqueda
  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
  }

  // Manejador de cambio en select Recurso
  function handleSelectChange(e) {
    const selected = e.target.options[e.target.selectedIndex]
    setSelectedResource(selected.value)
  }

  useEffect(() => {
    setSelectedResource(searchParams.get('resource') || 1)
    setSearchValue(searchParams.get('query') || '');
  }, [searchParams])

  return (
    <form className="search-input d-flex justify-content-between border w-100 shadow" onSubmit={handleSubmit}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="col-md-6 ps-0">
        <div className="input-group h-100">
          <span className="text-primary d-flex ps-3" >
            <span className="material-symbols-outlined my-auto">
              search
            </span>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder={"Busca algo"}
            value={searchValue} aria-label="Busca algo sobre la serie."
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="col-md-3 border-start ps-3">
        <select className="form-select form-select" value={selectedResource} onChange={handleSelectChange} aria-label=".form-select-lg">
          {resourceNames.map((name, index) => {
            return <option value={index + 1} key={index}>{name}</option>
          })}
        </select>
      </div>
      <div className="col-auto pe-2">
        <button className='btn btn-primary my-2 px-4' type='submit'>Buscar</button>
      </div>
    </form>
  )
}
