import React, { useState} from "react";

const Favourites = ({listName}) => {
  const [favList, setFavList] = useState([]);  
  function pushPop(){
    if (favList){
        return setFavList(listName--);
    }else {
        return setFavList(listName++);
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
