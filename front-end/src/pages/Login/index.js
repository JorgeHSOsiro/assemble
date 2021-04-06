import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const simpleValidator = useRef(new SimpleReactValidator());
  const history = useHistory();

  const sendForm = (e) => {
    e.preventDefault();
    history.push('/home');
  };

  return (
    <div className="login-container">
      <h2 className="title">Login</h2>
      <form className="form-content" onSubmit={ (e) => sendForm(e) }>
        <div className="email-field">
          <label htmlFor="email">
            Email:
            <input
              name="email"
              type="email"
              onChange={ (e) => setEmail(e.target.value) }
              onBlur={ () => simpleValidator.current.showMessageFor('errorEmail') }
            />
          </label>
          { simpleValidator.current.message('errorEmail', email, 'required|email') }
        </div>
        <div className="password-field">
          <label htmlFor="password">
            Password:
            <input
              name="password"
              type="password"
              onChange={ (e) => setPassword(e.target.value) }
              onBlur={ () => simpleValidator.current.showMessageFor('errorPassword') }
            />
          </label>
          { simpleValidator.current.message('errorPassword', password, 'required|min:5') }
        </div>
        <div className="btn-container">
          <button type="submit" className="login-btn">Entrar</button>
          <Link className="go-register" to="/register">
            Ainda não tenho conta
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
