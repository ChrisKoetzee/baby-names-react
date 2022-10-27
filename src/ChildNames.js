import React from "react";

const ChildNames = ({ array }) => {
//   const alphabetic = [...array].sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <div key={array.id}>
      {array.map((child, index) => (
        child.sex === "m" ? (
            <button style={{backgroundColor: 'blue'}} key={index.id}>{child.name}</button>
        ) : (
            <button style={{backgroundColor: 'pink'}} key={index.id}>{child.name}</button>
        )
      ))}
    </div>
  );
};

export default ChildNames;
