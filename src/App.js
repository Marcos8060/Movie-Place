import './App.css';
import Cto from './components/Cto';
import Hero from './components/Hero';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <>
     <Hero />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
     <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
     <Cto />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row 
         title="NETFLIX ORIGINALS" 
         fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow={true}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Cto />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     <Cto />
    </>
  );
}

export default App;
