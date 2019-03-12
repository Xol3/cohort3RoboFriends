import React from 'react';
//search box component
//onChange will call the onSearchChange to set the state
const SearchBox = ({searchfield, onSearchChange}) => {
  return(
    <div className="pa2">
      <input
      className="pa3 ba b-- green bg-lightest-blue"
      type="search"
      placeholder="LOOK UP SOMETHING"
      onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;
