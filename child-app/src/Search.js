import React, { useEffect, useState } from 'react';

const Search = () => {
  const [parentData,setparentData]=useState("childData")

    return <div><h1>Search Page ----- {parentData}</h1><p>This is the Search page.</p></div>;
  };
  export default Search;