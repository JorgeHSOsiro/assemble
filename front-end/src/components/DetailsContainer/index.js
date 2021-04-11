import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import constant from '../../helper/variables';

const DetailsContainer = ({
  title, img, characters, creators, subject, id,
}) => (
  <div className="details-container">
    <Link to="/home">Home</Link>
    <h1>{title}</h1>
    <img src={ `${img}/portrait_medium.jpg` } alt="hero" />
    { subject === 'comics' ? <h3>Characters</h3> : <h3>Comics</h3> }
    {characters.length > constant.ZERO ? (
      characters.map((char) => <a href={ `/details/characters/${id}` } key={ char.name }>{ char.name }</a>)
    ) : (
      <p>Nothing found</p>
    )}
    { subject === 'comics' ? <h3>Creators</h3> : <h3>Series</h3> }
    {creators.length > constant.ZERO ? (
      creators.map((creator) => <p key={ creator.name }>{creator.name}</p>)
    ) : (
      <p>Nothing found</p>
    )}
  </div>
);

DetailsContainer.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
  creators: PropTypes.arrayOf(PropTypes.string).isRequired,
  subject: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailsContainer;
