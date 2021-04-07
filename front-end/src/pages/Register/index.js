import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPass, setConfirmedPass] = useState('');

  const history = useHistory();

  const registerUser = () => {
    console.log(name);
    console.log(email);
    console.log(password);
    history.push('/login');
  };

  return (
    <div className="register-container">
      <h2 className="title">Sign up</h2>
      <form className="form-content">
        <div className="name-field">
          <label htmlFor="name">
            Name:
            <input
              name="name"
              type="name"
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
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
        </div>
        <div className="password-field">
          <label htmlFor="password">
            Confirm password:
            <input
              name="password"
              type="password"
              onChange={ (e) => setConfirmedPass(e.target.value) }
            />
          </label>
        </div>
        {name && email && password && confirmedPass ? (
          <button className="register-btn" type="button" onClick={ registerUser }>
            Send
          </button>
        ) : (
          <button
            className="register-btn btn-fog"
            type="button"
            onClick={ registerUser }
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
