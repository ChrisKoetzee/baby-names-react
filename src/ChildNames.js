import React from "react";
import './App.css';

const ChildNames = ({array}) => {
    const alphabetic = [...array].sort((a, b) => a.name > b.name ? 1 : -1);
    return (
        {alphabetic.array.map((child) => (
            child.sex===m ? <ul><li style="background-color: blue;">{child.name}</li></ul> : <ul><li style="background-color: pink;">{child.name}</li></ul>
    ))}
    )
};
console.log(nameData);

export default ChildNames;
