// La page d'entrée ou on tape le mdp utilisateur
import { useVerifyGameCodeMutation } from '../../gql/generated/schema';
import './css/StartPage.css';
import Wallpaper from '../../img/Wallpaper1.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Right_Arrow from '../../img/Right_Arrow.png';
import Dalmatien from '../../img/Dalmatien1.jpg';

function StartPage() {

  const [psw, setPsw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [VerifyGameCode] = useVerifyGameCodeMutation();

  return (
    <div className='start-page' style={{ backgroundImage: `url(${Wallpaper})` }}>
      <img src={Dalmatien} alt="Dalmatien" />
      <h1>Frédéric</h1>
      <form onSubmit={async (e) => {
        e.preventDefault();
        setError('');
        const verify = await VerifyGameCode({ variables: { data: { "name": "StartPage", "psw": psw } } });
        const checkOfCode = verify?.data?.verifyGameCode;
        if (checkOfCode === true) {
          navigate("/desktop");
        } else {
          setError('Mot de passe incorrect');
        }
      }}>
        <input type="password" id='psw' value={psw} onChange={(e) => setPsw(e.target.value)} />
        <button type="submit" className='start-page-button'>
          <img src={Right_Arrow} alt="flêche de validation" />
        </button>
      </form>
      <p className='error'>{error}</p>
    </div>
  );
}

export default StartPage;