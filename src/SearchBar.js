import React, { useState } from "react";

const SearchBar = ({ array }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  if (searchInput.length > 0) {
    array.filter((child, num) => {
      return (
        <div key={num.id}>
          <input
            type="text"
            placeholder="Search Name here"
            onChange={handleChange}
            value={searchInput}
          />
          {child.name.match(searchInput)}; 
          <table>
             {array.map((child, i) => {
              return (
              <tr key={i.id}>
                <td>{child.name}</td>
              </tr>
              )
            })}
          </table>
        </div>
      );
    });
  }
};

export default SearchBar;
