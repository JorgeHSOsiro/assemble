import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import './style.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setName(user.name);
    setEmail(user.email);
  }, []);

  const updateInfo = (newName, newEmail, newPassword) => {
    setMessage(`${newName}, ${newEmail}, ${newPassword},`);
  };

  return (
    <div className="profile-container">
      <Link className="to-home" to="/home">
        <BsArrowLeftShort className="arrow-icon" />
        <p>Home</p>
      </Link>
      <form className="form-content">
        <div className="email-field">
          <label htmlFor="name">
            Name:
            <input
              name="name"
              type="name"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
          </label>
        </div>
        <div className="email-field">
          <label htmlFor="email">
            Email:
            <input
              name="email"
              type="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
        </div>
        <div className="password-field">
          <label htmlFor="password">
            Password:
            <input
              name="password"
              type="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
        </div>
        <button className="update-btn" type="button" onClick={ () => updateInfo(name, email, password) }>
          Update
        </button>
        { message && <p>{ message }</p>}
      </form>
    </div>
  );
};

export default Profile;
