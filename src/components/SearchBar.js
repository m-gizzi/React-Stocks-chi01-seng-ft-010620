import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input id="alphabetically" type="radio" value="Alphabetically" checked={null} onChange={props.changeSortOrder}/>
        Alphabetically
      </label>
      <label>
        <input id="price" type="radio" value="Price" checked={null} onChange={props.changeSortOrder}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
