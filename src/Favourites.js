import React from 'react'

const Favourites = ({array, listName}) =>{
    const favList = [];
        return (
        <div>
        <ul>
        <li onClick={array.pop(listName) || favList.pop(listName)}>{listName.push(favList) || listName.push(array)}</li>
        </ul>
        </div>
    )
};

export default Favourites;
