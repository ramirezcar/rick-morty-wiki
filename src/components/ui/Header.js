import SearchInput from './SearchInput';

function Header({ selectedResource, setSelectedResource, selectedTextResource, setSelectedTextResource }) {
  return (
    <>
      <header className='d-flex flex-column align-items-center '>
        <div className='background'></div>
        <div className="landing pt-4 mb-2 text-center container">
          <h3 className="display-4 fw-black mb-0">Rick & Morty Hola</h3>
          <h3 className="fw-bold text-primary mb-0" style={{ marginTop: '-10px' }}>Wiki</h3>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Comparar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <SearchInput selectedResource={selectedResource} setSelectedResource={setSelectedResource} selectedTextResource={selectedTextResource} setSelectedTextResource={setSelectedTextResource} />
      </header>
    </>
  );
}

export default Header;
