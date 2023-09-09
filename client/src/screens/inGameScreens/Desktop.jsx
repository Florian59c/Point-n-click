// La page du Bureau
import './css/Desktop.css';
import Wallpaper from '../../img/Windows10_Wallpaper.jpg';

function Desktop() {
  return (
    <div className='desktop' style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className='footer'>

      </div>
    </div>
  );
}

export default Desktop;