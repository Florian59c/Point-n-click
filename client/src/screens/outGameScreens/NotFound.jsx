import './css/NotFound.css';
import Detective from '../../img/Détective.svg';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='not-found'>
      <img src={Detective} alt="Silhouette en noir d'un détective privé sur fond blanc" />
      <h1>404</h1>
      <h1>La page n'a pas été trouvé !</h1>
      <div className='submit-button'>
        <Link to="/" >
          < button className='button-normal'>Retourner à la page d’acceuil</button>
        </Link>
      </div >
    </div>
  );
}

export default NotFound;