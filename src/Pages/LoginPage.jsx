import React, { useState } from 'react';
import Input from '../Components/Input';
import LoginForm from '../Components/LoginForm';
import LoginCss from '../Css/LoginPageCss.module.css';



export default function LoginPage() {
  return (
    <div className={LoginCss.container}>
      <LoginForm />
    </div>
  )
}
