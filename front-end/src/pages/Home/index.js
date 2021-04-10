import React, { useContext, useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import heroesContext from '../../context/heroesContext';
import fetchMarvel from '../../services/marvelAPi';
import MarvelCards from '../../components/Cards/MarvelCards';
import './style.css';

require('dotenv').config();

const Home = () => {
  const [resultArray, setResultArray] = useState([]);
  const { search, subject } = useContext(heroesContext);

  useEffect(() => {
    if (subject) {
      fetchMarvel(subject, search)
        .then((response) => response.json())
        .then((res) => setResultArray(res.data.results));
    }
  }, [search, subject]);

  return (
    <div>
      <Menu />
      <div className="items-container">
        {subject === 'comics'
          ? resultArray.map((comics) => (
            <MarvelCards
              key={ comics.id }
              img={ comics.thumbnail.path }
              title={ comics.title }
            />
          ))
          : resultArray.map((char) => (
            <MarvelCards
              key={ char.id }
              img={ char.thumbnail.path }
              title={ char.name }
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
