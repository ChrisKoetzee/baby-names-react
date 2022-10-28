import React from "react";

const ChildNames = ({ array }) => {
  const alphabetic = [...array].sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <div key={array.id}>
      {array.map((child, index) => (
        child.sex === "m" ? (
            <button key={index.id} style={{backgroundColor: 'blue'}}>{alphabetic}{child.name}</button>
        ) : (
            <button key={index.id} style={{backgroundColor: 'pink'}}>{alphabetic}{child.name}</button>
        )
      ))}
    </div>
  );
};

export default ChildNames;
