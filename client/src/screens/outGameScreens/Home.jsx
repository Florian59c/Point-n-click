import { Link } from 'react-router-dom';
import './css/Home.css';

function Home() {
  return (
    <div className='home'>
      <p>Dans ce jeu, vous incarnez un détective qui fouille dans l’ordinateur d’une personne disparue. Pour avoir une bonne expérience de jeu, il est donc indispensable de jouer sur un ordinateur !</p>
      <hr />
      <p>Le jeu comporte également un système de rang en fonction du temps que vous avez mis pour le terminer. Pour pouvoir sauvegarder votre score, vous devez être connecté !</p>
      <div>
        <Link to="/prologue">
          <button className='button-normal'>Accéder au prologue</button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className='button-normal'>Connection</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;