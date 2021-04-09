import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import './style.css';

const Home = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('Comics');
  }, []);
  return (
    <div>
      <Menu />
      <div className="items-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Home;
