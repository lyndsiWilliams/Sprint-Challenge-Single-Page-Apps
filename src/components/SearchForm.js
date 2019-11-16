import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  // console.log(props.character);

  const [searchTerm, setSearchTerm] = useState("");
  
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    const results = props.character.filter(char =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
    console.log(searchTerm);
    console.log(searchResults);
 
  return (
    <section className="search-form">
     <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="search"
          onChange={handleChange}
          value={searchTerm}
        />
     </form>
     <div className="result-list">
        {searchResults.map(char => {
          return (
            <p key={char.id} >{char.name}</p>
          );
        })}
     </div>
    </section>
  );
}
