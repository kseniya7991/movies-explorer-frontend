import React from 'react';
import SignForm from '../SignForm/SignForm';

import './Login.css';

function Login({ onLogin }) {
  function handleSubmitForm(values) {
    onLogin(values);
  }

  return (
    <SignForm
      name="login"
      title="Рады видеть!"
      buttonValue="Войти"
      text="Ещё не зарегистрированы? "
      linkText="Регистрация"
      onSubmitForm={handleSubmitForm}
    />
  );
}

export default Login;
