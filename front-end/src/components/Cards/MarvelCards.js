import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const MarvelCards = ({ img, title, id }) => (
  <div className="card-container">
    <Link to={ `/details/${id}` }>
      <img className="card-img" src={ `${img}/portrait_medium.jpg` } alt="imagem" />
    </Link>
    <p className="card-title">{ title }</p>
    <p className="copy-rights">Data provided by Marvel. © 2014 Marvel</p>
  </div>
);

MarvelCards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MarvelCards;
