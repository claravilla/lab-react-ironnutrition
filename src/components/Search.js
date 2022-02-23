import { Divider, Input } from 'antd';
import React, { useState } from 'react';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    // setSearchInput(event.target.value);  ---> this seems to be always an input behing.. so when I type P is set to blank
    // console.log(searchInput);
    props.handleSearch(event.target.value.toLowerCase());
  };

  return (
    <form>
      <Divider>Search</Divider>
      <Input
        type="text"
        name="searchInput"
        value={searchInput}
        onChange={handleSearchInput}
      />
    </form>
  );
}

export default Search;
