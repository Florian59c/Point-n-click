import { useState, useEffect } from 'react';
import './css/Prologue.css';
import { Link } from 'react-router-dom';

function Prologue() {

  const [startTime, setStartTime] = useState(Date.now());

  // pour ajouter des objets dans le localStorage chaque fois que la valeur de l'état change
  useEffect(() => {
    localStorage.setItem('startTime', JSON.stringify(startTime));
  }, [startTime]);

  function startDate() {
    if (startTime > 0) {
      setStartTime(0);
    }
    setStartTime(Date.now());
    console.log("startTime : " + startTime);
  }

  return (
    <div className='prologue'>
      <h1>Le prologue de l'histoire :</h1>
      <p className='history'>Après plusieurs mois d’enquête infructueuse sur la disparition d’un éminent scientifique, vous avez été contacté par Erika, la fille du disparu.</p>
      <p className='history'>Elle pense que des réponses sur la disparition de son père sont cachées dans son ordinateur, mais personne n’a été capable d’y accéder. Elle vous a donc remis l’ordinateur pour que vous puissiez l’aider à obtenir des informations sur cette mystérieuse disparition.</p>
      <hr />
      <p>Au clic sur le bouton “commencer”, le chronomètre se mettra en route et il ne sera plus possible de l’arrêter !</p>
      <div className='submit-button'>
        <Link to="/start-page" >
          < button className='button-normal' onClick={startDate}>Commencer</button>
        </Link>
      </div >
    </div >
  );
}

export default Prologue;