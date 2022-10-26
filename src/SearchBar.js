// import React, {useState} from 'react'


// const SearchBar = ({array}) => {
//     const [searchInput, setSearchInput] = useState("");
//     const handleChange = (event) => {
//         event.preventDefault();
//         setSearchInput(event.target.value);
//       };
      
//       if (searchInput.length > 0) {
//           array.filter((child) => {
//           return (
//             <div>
//             <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />
//             {child.name.match(searchInput)};
//                 <table>
//                 <tr>
//                     <th>Name</th>
//                 </tr>
//                 {array.map((child, index) => {
//                 <tr>
//                     <td>{child.name}</td>
//                 </tr>
//                 })
//                 }
//                 </table>
//             </div>
//           )
//       });
//       }
// }

// export default SearchBar;