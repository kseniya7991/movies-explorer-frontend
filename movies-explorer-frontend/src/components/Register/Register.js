import React from 'react';
import SignForm from '../SignForm/SignForm';

import './Register.css';

function Register() {
  return <SignForm
  name="register"
  title="Добро пожаловать!"
  buttonValue="Зарегистрироваться"
  text="Уже зарегистрированы? "
  linkText="Войти"
  />;
}

export default Register;
