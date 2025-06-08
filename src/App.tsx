import { useState } from 'react'
import './App.css'
import Search from './Search';

import { shuffleArray } from './utils';

const allNames = [
  "Hemant",
  "Shilpa",
  "Arushi",
  "Aaroh",
  "Tatya",
  "Dada"
];

function App() {
  console.log("Rendering App");
  const [names,setNames] = useState(allNames);

  const handleSearch = (text: string) =>{
    const filteredNames = allNames.filter((name) =>
      name.includes(text)
    );
    console.log("Setting names");
    setNames(filteredNames);
  }

  return (
    <>
      <div>
        <ul>
        {names.map((name,index) =>(<li key={index}>{name}</li>))}
        </ul>
      </div>
      <Search onChange={handleSearch} />
      <button type='button' 
        onClick={() => {setNames(shuffleArray(allNames))}}
      >Shuffle</button>
    </>
  )
}

export default App
