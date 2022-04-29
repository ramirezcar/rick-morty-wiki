import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { FaInfoCircle } from 'react-icons/fa';
import dateFormat from "dateformat";

const ModalDetails = ({episode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [characters, setCharacters] = useState([]);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const getCharacters = async (characters) => {
    const charactersArray = []
    characters.map(async (char, index) => {
      let response = await fetch(char)
      let responseJSON = await response.json()
      charactersArray.push(responseJSON)
    })
    setCharacters(charactersArray)
  }
  
  useEffect(() => {
    if (!(typeof episode.characters === 'undefined')) {
      getCharacters(episode.characters)
    }
  }, [episode]);

  return (
    <div className="d-flex align-items-center">
      <button  className="btn btn-sm btn-outline-primary" onClick={showModal}><FaInfoCircle className='w-auto pe-2' />Más Información</button>
      <Modal show={isOpen} onHide={hideModal} dialogClassName={"modal-dialog modal-dialog-centered"} size="lg">
        <Modal.Header>
          <Modal.Title>M. Night Shaym-aliens!</Modal.Title>        
          <button className="btn-close pe-4" onClick={hideModal}></button>
        </Modal.Header>
        <Modal.Body>
          <div className="px-4 py-3">
            <h5 className="text-uppercase fw-bold mb-2">Información del episodio</h5>
            <h5 className="fs-6 mb-1">Fecha de emisión</h5>
            <p>{dateFormat(episode.air_date, "dd-m-yyyy")}</p>
            <h5 className="fs-6 mb-1">Código</h5>
            <p>{episode.episode}</p>
            <h5 className="text-uppercase fw-bold my-1">Personajes participantes</h5>
            <div className="row overflow-auto px-2 list-characters">
              { characters.map((character, index) => {
                return (
                  <div className="col-2 px-1 my-1" key={index}>
                      <img src={character.image} title={character.name} className="rounded float-start w-100 character-img-sm mb-1" alt="..."></img>
                      <p className="fw-normal quote lh-1 mb-1">{character.name}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ModalDetails