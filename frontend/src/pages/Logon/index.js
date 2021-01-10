import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './style.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>
        <form>
          <h1>Faça o seu logon</h1>
          <input placeholder="Informe seu id" />
          <button className="button" onSubmit="/profile">
            Entrar
          </button>
          <Link class="back-link" to="/register">
            <FiLogIn size="16" color="#e02e41" /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
