import { useState } from 'react';
import './css/Register.css';
import { useCreateUserMutation, useGetProfileQuery, useLoginMutation } from '../../gql/generated/schema';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [createUser] = useCreateUserMutation();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { data: currentUser, client } = useGetProfileQuery({
    errorPolicy: "ignore",
  });
  const [login] = useLoginMutation();
  console.log(currentUser);

  return (
    <div className='register'>
      <form
        onSubmit={async (e) => {
          if (confirmPassword !== password) {
            alert("Mot de passe différent");
          } else {
            e.preventDefault();
            setError("");
            try {
              await createUser({
                variables: { data: { pseudo, email, password } },
              });
              navigate("/prologue");
            } catch (err) {
              console.error(err);
              setError("L'un des champs de formulaire est invalide !");
            } finally {
              client.resetStore();
              await login({ variables: { data: { email, password } } });
            }
          }
        }}
      >
        <div className='formulaire'>
          <label htmlFor="pseudo">
            <p>Pseudo : </p>
            <input
              type="pseudo"
              id="pseudo"
              name="pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <p>Adresse Email : </p>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className='formulaire psw-form'>
          <label htmlFor="password">
            <p>Mot de passe : </p>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="confirmPassword">
            <p>Confirmez votre mot de passe : </p>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        {/* <div className="redirection_sign_in">
          <p>Déjà un compte ?</p>&nbsp;<Link to="/login">Connexion</Link>
        </div> */}

        <div className='submit-button'>
          <button className='button-normal'>S’inscrire</button>
        </div>
        {error && <p className='error'>{error}</p>}
      </form>
      <p className='redirect'>Vous avez déjà un compte ?&ensp;
        <Link to="/login">
          <p>Connectez-vous !</p>
        </Link>
      </p>
    </div>
  );
}

export default Register;