import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import constant from '../../helper/variables';

const DetailsContainer = ({
  title, img, characters, creators, subject, id,
}) => {
  const [opt, setOpt] = useState('');

  useEffect(() => {
    if (subject === 'comics') {
      setOpt('characters');
    } else {
      setOpt('comics');
    }
  }, []);

  return (
    <div className="details-container">
      <Link to="/home">Home</Link>
      <h1>{title}</h1>
      <img src={ `${img}/portrait_medium.jpg` } alt="hero" />
      { opt === 'comics' ? <h3>Characters</h3> : <h3>Comics</h3> }
      {characters.length > constant.ZERO ? (
        characters.map((char) => <a href={ `/details/${subject}/${id}/${opt}/${char.name}` } key={ char.name }>{ char.name }</a>)
      ) : (
        <p>Nothing found</p>
      )}
      { opt === 'comics' ? <h3>Creators</h3> : <h3>Series</h3> }
      {creators.length > constant.ZERO ? (
        creators.map((creator) => <p key={ creator.name }>{creator.name}</p>)
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  );
};

DetailsContainer.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
  creators: PropTypes.arrayOf(PropTypes.string).isRequired,
  subject: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailsContainer;
