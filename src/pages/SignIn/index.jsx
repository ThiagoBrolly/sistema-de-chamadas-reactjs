import { useState } from 'react';
import './signin.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('Click')
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={Logo} alt='Sistema Logo' />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type='text' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Acessar</button>
        </form>

        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  )
}