import './assets/App.scss';
import Header from './pages/layouts/Header';
import Home from './pages/Home';
// import Comparison from './pages/Comparison';
import Route from './components/utils/Route';

function App() {
  return (
    <div className="App">
      <Header>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/comparison">
          {/* <Comparison /> */}
        </Route>
      </Header>

    </div>
  );
}

export default App;
