import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <Link to="/">
            <img src={logoImg} alt="Be the Hero" />
          </Link>

          <h1>Cadastrar</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarm
            os casos da sua ONG.
          </p>
          <Link class="back-link" to="/">
            <FiArrowLeft size="16" color="#e02e41" />
            Voltar para home
          </Link>
        </section>
        <form>
          <input placeholder="Nome d ONG"></input>
          <input type="Email" placeholder="Email"></input>
          <input placeholder="Wathsapp"></input>
          <div className="groupCity">
            <input placeholder="Cidade"></input>
            <input placeholder="UF" width="80"></input>
          </div>
          <button class="button" onSubmit="/incident/new">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
