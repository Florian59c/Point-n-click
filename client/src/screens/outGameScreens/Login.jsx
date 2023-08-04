import { useState } from 'react';
import './css/Login.css';
import { useGetProfileQuery, useLoginMutation, useLogoutMutation } from '../../gql/generated/schema';
import { useNavigate } from 'react-router-dom';

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
    <div>
      {currentUser?.profile ? (
        <div>
          <p>vous êtes connecté</p>
          <button
            onClick={async () => {
              await logout();
              client.resetStore();
            }}
          >
            Se déconnecter
          </button>
        </div>
      ) : (
        <div>
          <p>Login</p>
          <form on onSubmit={async (e) => {
            e.preventDefault()
            console.log({ email, password });
            setError('');
            try {
              await login({ variables: { data: { email, password } } });
            } catch (err) {
              console.error(err);
              setError('invalid credentials');
            } finally {
              client.resetStore();
              navigate("/prologue");
            }
          }}>
            <label htmlFor="email">
              <p>Email : </p>
              <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor="password">
              <p>Password : </p>
              <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            {error && <p>{error}</p>}
            <button type="submit">Se connecter</button>
          </form>
        </div>
      )
      }
    </div>
  );
}

export default Login;