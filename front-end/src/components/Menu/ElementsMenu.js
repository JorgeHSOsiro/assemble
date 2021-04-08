import React from 'react';
import Buttons from './buttons';
import './style.css';

function ElementsMenu() {
  return (
    <div className="side-menu-container">
      {Buttons('Meu perfil', '/profile')}
      {Buttons('Sair', '/login')}
    </div>
  );
}
export default ElementsMenu;
