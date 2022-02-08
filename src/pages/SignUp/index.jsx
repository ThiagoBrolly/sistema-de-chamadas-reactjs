import { useContext, useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    
    if(name !== '' && email !== '' && password !== '' ){
      signUp(email, password, name)
    }
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={Logo} alt='Sistema Logo' />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>
          <input type='text' placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
        </form>

        <Link to="/">Já possui uma conta? Entre</Link>
      </div>
    </div>
  )
}