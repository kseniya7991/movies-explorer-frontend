import React from 'react';
import SignForm from '../SignForm/SignForm';

import './Register.css';

function Register({ onRegister }) {
  function handleSubmitForm(values) {
    onRegister(values);
  }

  return (
    <SignForm
      name="register"
      title="Добро пожаловать!"
      buttonValue="Зарегистрироваться"
      text="Уже зарегистрированы? "
      linkText="Войти"
      onSubmitForm={handleSubmitForm}
    />
  );
}

export default Register;
