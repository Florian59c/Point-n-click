import { useState } from 'react';
import './css/Register.css';
import { useCreateUserMutation, useGetProfileQuery, useLoginMutation } from '../../gql/generated/schema';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <p>Register</p>
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
            } catch (err) {
              console.error(err);
              setError("invalid credentials");
            } finally {
              client.resetStore();
              await login({ variables: { data: { email, password } } });
              navigate("/prologue");
            }
          }
        }}
      >
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
          <p>Email : </p>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <p>PSW : </p>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="confirmPassword">
          <p>Confirm PSW : </p>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {error && <p>{error}</p>}
        {/* <div className="redirection_sign_in">
          <p>Déjà un compte ?</p>&nbsp;<Link to="/login">Connexion</Link>
        </div> */}
        <button >Inscription</button>
      </form>
    </div>
  );
}

export default Register;