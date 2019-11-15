import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  console.log(character);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacter(response.data.results);
      console.log(response.data.results);
    })
    .catch(error => {
      console.log("The data was not returned", error)
    })
  }, []);

  return (
    <section className="character-list">
      {/* {<h2>TODO: `array.map()` over your state here!</h2>} */}
      {character.map(char => (
        <CharacterCard key={char.id} name={char.name} />
      ))}
    </section>
  );
}
