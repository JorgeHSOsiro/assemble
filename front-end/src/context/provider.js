import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeroesContext from './heroesContext';

const Provider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');

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
