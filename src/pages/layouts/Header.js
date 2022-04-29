import Landing from './Landing';

function Header({children}) {
  return (
    <>
      <header className="App-header">
        <Landing />
      </header>
      {children}
    </>
  );
}

export default Header;
