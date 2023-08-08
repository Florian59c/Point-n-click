import { useState } from 'react';
import './css/Login.css';
import { useGetProfileQuery, useLoginMutation, useLogoutMutation } from '../../gql/generated/schema';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const { data: currentUser, client } = useGetProfileQuery({ errorPolicy: 'ignore' });
  console.log({ currentUser });

  return (
    <div className='login'>
      {currentUser?.profile ? (
        <div className='logout'>
          <p>vous êtes connecté connecté avec l'adresse mail : {currentUser?.profile?.email}</p>
          <div className='submit-button'>
            <button
              className='button-normal'
              onClick={async () => {
                await logout();
                client.resetStore();
              }}
            >
              Se déconnecter
            </button>
          </div>
          <div className='return'>
            <Link to="/">
              <p>Retouner à la page d'accueil</p>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={async (e) => {
            e.preventDefault()
            console.log({ email, password });
            setError('');
            try {
              await login({ variables: { data: { email, password } } });
              navigate("/prologue");
            } catch (err) {
              console.error(err);
              setError("L'adresse mail ou le mot de passe est incorrect");
            } finally {
              client.resetStore();
            }
          }}>
            <div className='formulaire'>
              <label htmlFor="email">
                <p>Adresse Email : </p>
                <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label htmlFor="password">
                <p>Mot de passe : </p>
                <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>
            <div className='submit-button'>
              <button type="submit" className='button-normal'>Se connecter</button>
            </div>
            {error && <p className='error'>{error}</p>}
          </form>
          <p className='redirect'>Vous n’avez pas de compte ?&ensp;
            <Link to="/register">
              <p>Inscrivez-vous !</p>
            </Link>
          </p>
          <div className='submit-button'>
            <Link to="/prologue">
              <button type="submit" className='button-normal'>Accéder au prologue</button>
            </Link>
          </div>
          <Link className='to-delete' to="/delete">
            <p>Cliquez ici pour supprimer votre compte</p>
          </Link>
        </div>
      )
      }
    </div >
  );
}

export default Login;