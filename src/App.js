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
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Cto />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     <Cto />
    </>
  );
}

export default App;
