import React, { useContext, useEffect } from 'react';
import Menu from '../../components/Menu';
import heroesContext from '../../context/heroesContext';
import fetchMarvel from '../../services/marvelAPi';
import './style.css';

require('dotenv').config();

const Home = () => {
  // const [resultArray, setResultArray] = useState([]);
  const { search, subject } = useContext(heroesContext);

  useEffect(() => {
    if (subject) {
      fetchMarvel(subject)
        .then((response) => response.json())
        .then((res) => console.log(res.data.results));
    }
  }, [search, subject]);

  return (
    <div>
      <Menu />
      <div className="items-container">
        <p>{subject}</p>
        <p>{search}</p>
      </div>
    </div>
  );
};

export default Home;
