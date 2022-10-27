import React, { useState} from "react";

const Favourites = ({ array, listName }) => {
  const [favList, setFavList] = useState([]);  
  function pushPop(){
    if (listName && favList){
        return setFavList(array.listName);
    }else {
        return setFavList(favList.listName);
    }
  };
  return (
    <div>
      <ul>Favourites : 
        <li onClick={pushPop}></li>
      </ul>
    </div>
  );
};

export default Favourites;
