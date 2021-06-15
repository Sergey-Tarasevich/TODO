import React from 'react';

const Search = (props) => {
  return (
    <div className="search">
      <input
        onChange={(e) => props.search(e.target.value)}
        type="text"
        placeholder="Search here..."
        // value={props.value}
      />
    </div>
  );
};

export default Search;
