// La page d'entrée ou on tape le mdp utilisateur
import { useFindGameCodeQuery } from '../../gql/generated/schema';
import './css/StartPage.css';
import Wallpaper from '../../img/Wallpaper1.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {

  const [psw, setPsw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const pageCode = useFindGameCodeQuery({ variables: { data: "StartPage" } });
  const gameCode = pageCode?.data?.findGameCode;

  // console.log("le code de la page est dans la constante gameCode et vaux : " + gameCode);

  return (
    <div className='start-page' style={{ backgroundImage: `url(${Wallpaper})` }}>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (psw === gameCode) {
          navigate("/desktop");
        } else {
          setError('Mot de passe incorrect');
        }
      }}>
        <input type="password" id='psw' value={psw} onChange={(e) => setPsw(e.target.value)} />
        <button type="submit" className='start-page-button'>V</button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default StartPage;