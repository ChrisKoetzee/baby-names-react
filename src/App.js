import React from 'react';
import BabyNamesData from './BabyNamesData.json'
import ChildNames from './ChildNames.js';
import SearchBar from './SearchBar.js';
import Favourites from './Favourites.js';

function App() {
  const nameData = BabyNamesData;
  const listName = nameData.name;

  return (
    <div key={nameData.id}>
      <SearchBar array={nameData} />
      <Favourites array={nameData} listName={listName} />
      <ChildNames array={nameData}/>
    </div>
  );
}

export default App;
