import './App.css';
import Cto from './components/Cto';
import Hero from './components/Hero';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <>
     <Hero />
     <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
     <Cto />
    </>
  );
}

export default App;
