import React from 'react';
import SignForm from '../SignForm/SignForm';

import './Login.css';

function Login() {
  return <SignForm
  name="login"
  title="Рады видеть!"
  buttonValue="Войти"
  text="Ещё не зарегистрированы? "
  linkText="Регистрация"
  />;
}

export default Login;
