import React, { useContext, useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import heroesContext from '../../context/heroesContext';
import './style.css';

const Home = () => {
  const [title, setTitle] = useState('');
  const { search, subject } = useContext(heroesContext);

  useEffect(() => {

  }, [search, subject]);
  useEffect(() => {
    setTitle('Comics');
  }, []);
  return (
    <div>
      <Menu />
      <div className="items-container">
        <h2>{title}</h2>
        <h3>{search}</h3>
        <h3>{subject}</h3>
      </div>
    </div>
  );
};

export default Home;
