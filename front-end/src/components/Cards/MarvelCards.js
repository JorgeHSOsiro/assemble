import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MarvelCards = ({ img, title }) => (
  <div className="card-container">
    <img className="card-img" src={ `${img}/portrait_medium.jpg` } alt="imagem" />
    <p className="card-title">{ title }</p>
    <p>Data provided by Marvel. © 2014 Marvel</p>
  </div>
);

MarvelCards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MarvelCards;
