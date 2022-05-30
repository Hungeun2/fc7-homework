
import './App.css';
import Result from './componenet/Result';
import ResultNumber from './componenet/ResultNumber';
import SearchBar from './componenet/SearchBar';
import React from 'react';

function App() {
  const [news, setNews] = React.useState([]);
  return (
    <>
    <div className='container'>
      <header>NEWS SEARCH</header>
        <SearchBar setNews={setNews}/>
        {news.length !== 0 ? 
        <>
          <Result news={news}/>
          <ResultNumber num={news.length}/>
        </> 
        :<Result news={news}/>}
    </div>
    </>
  );
}

export default App;
