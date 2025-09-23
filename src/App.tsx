import './App.css'
import WordCard from './WordCard';
import SearchBar from './SearchBar';
import {useState} from "react";

const App = () => {
  const [results, setResults] = useState();
 
  return (
    <>
      <SearchBar onSearch={setResults}/>
      <hr></hr>
      {/* Word Info Card */}
      <div>
       <WordCard results={results}/>
      </div>
    </>
  )
}

export default App
