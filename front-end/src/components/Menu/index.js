import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BsJustify } from 'react-icons/bs';
import './style.css';

import ElementsMenu from './ElementsMenu';

function renderTopMenu(openMenu, setOpenMenu) {
  return openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
}

function Menu({ title }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-content">
      <div className="header-title">
        <h2>{`${title}`}</h2>
      </div>
      <div className="header-back">
        <div className="header-icon">
          <button
            onClick={ () => renderTopMenu(openMenu, setOpenMenu) }
            type="button"
          >
            <BsJustify className="style-icon" />
          </button>
        </div>
        {openMenu === true ? ElementsMenu() : null}
      </div>
    </header>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Menu;
