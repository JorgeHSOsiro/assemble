import React, { useEffect, useState } from 'react';
import api from '../../services/characterApi';

const FavCharacters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    api.getAllCharacters().then((response) => {
      setCharacters(response.data);
    });
  });

  return (
    <div>
      <h1>Characters</h1>
      {characters.map((item) => (
        <p key={ item.id }>{item.name}</p>
      ))}
    </div>
  );
};

export default FavCharacters;
