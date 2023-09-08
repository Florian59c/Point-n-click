// La page d'entrée ou on tape le mdp utilisateur
import { useVerifyGameCodeMutation } from '../../gql/generated/schema';
import './css/StartPage.css';
import Wallpaper from '../../img/Wallpaper1.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {

  const [psw, setPsw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [VerifyGameCode] = useVerifyGameCodeMutation();

  return (
    <div className='start-page' style={{ backgroundImage: `url(${Wallpaper})` }}>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const verify = await VerifyGameCode({ variables: { data: { "name": "StartPage", "psw": psw } } });
        const checkOfCode = verify?.data?.verifyGameCode;
        if (checkOfCode === true) {
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