import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeroesContext from './heroesContext';

const Provider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');

  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      history.push('/login');
    } else {
      history.push('/home');
    }
  });

  const contextValue = {
    setSearch,
    setSubject,
    search,
    subject,
  };

  return (
    <HeroesContext.Provider value={ contextValue }>
      {children}
    </HeroesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
