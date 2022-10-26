import React from 'react';
import './App.css';
import BabyNamesData from './BabyNamesData.json'
import ChildNames from './ChildNames.js';
import SearchBar from './SearchBar.js';
import Favourites from './Favourites.js';

function App() {
  const nameData = BabyNamesData;
  console.log(nameData);
  const listName = nameData.name;
  console.log(listName);

  return (
    <div>
      <SearchBar array={nameData} />
      <Favourites array={nameData} listName={listName} />
      <ChildNames array={nameData}/>
    </div>
  );
}

export default App;
