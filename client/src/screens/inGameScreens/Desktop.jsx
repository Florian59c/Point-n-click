// La page du Bureau
import './css/Desktop.css';
import Wallpaper from '../../img/Windows10_Wallpaper.jpg';
import PSWGen from '../../img/Password_Generator_Icon.png';
import Note from '../../img/Bloc_note.png';
import Trash from '../../img/Corbeille_windows10-transformed.png';
import { Link } from 'react-router-dom';

function Desktop() {
  return (
    <div className='desktop' style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className='body'>
        <div className='shortcut'>
          <Link to='/password-generator'>
            <img src={PSWGen} alt="Le logiciel 'Password Generator'" />
            <p>Password Generator</p>
          </Link>
        </div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'>
          <Link to='/final-file'>
            <img src={Note} alt="Un fichier bloc note" />
            <p>Mon histoire</p>
          </Link>
        </div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'></div>
        <div className='shortcut'>
          <img src={Trash} alt="la corbeille" />
          <p>Corbeille</p>
        </div>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default Desktop;