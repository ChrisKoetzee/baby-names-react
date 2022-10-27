import React from "react";

const Favourites = ({ array, listName }) => {
  const favList = [];
  function pushPop(){
    if (listName || favList){
        return listName.pop(array) || listName.push(favList);
    }else {
        return favList.push(listName) || array.push(listName);
    }
  };
  return (
    <div>
      <ul>
        <li onClick={pushPop}></li>
      </ul>
    </div>
  );
};

export default Favourites;
