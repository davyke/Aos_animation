import React, { useState, useEffect } from "react";
import "../styles.css";
const animation = [
  "fade-left",
  "fade-right",
  "fade-up",
  "fade-down",
  "fade-up-right",
  "fade-up-left",
  "fade-down-right",
  "fade-down-left",
  "flip-left",
  "flip-right",
  "flip-up",
  "flip-down",
  "zoom-in",
  "zoom-in-up",
  "zoom-in-down",
  "zoom-in-left",
  "zoom-in-right",
  "zoom-out",
  "zoom-out-up",
  "zoom-out-down",
  "zoom-out-right",
  "zoom-out-left"
];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function HarryCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div className="body">
      <h1 className="header">Harry Potter Characters</h1>
      <ul>
        {characters.map((character) => (
          <ul
            data-aos={animation[getRandomInt(0, 21)]}
            className="single-character"
            key={character.name}
          >
            <h2>{character.name}</h2>
            <img src={character.image} alt="character" />
            <p>House: {character.house}</p>
            <p>Species: {character.species}</p>
            {/* You can display more information here */}
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default HarryCharacters;
