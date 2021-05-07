import React from 'react';
import './App.css'; 
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
     <Row  title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals
      
      } isLargeRow/>
     <Row title="Treending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Romance Novies" fetchUrl={requests.fetchRomaceMovies}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
