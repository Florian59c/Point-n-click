import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Epilogue.css';

function Epilogue() {

  const [newScore, setNewScore] = useState(0);

  // recupere le donnée startTime dans le local storege et la stocke dans le state au 1er chargement de la page
  useEffect(() => {
    const newScore = JSON.parse(localStorage.getItem('newScore'));
    if (newScore) {
      setNewScore(newScore);
    }
  }, []);

  function verifyPlural() {
    const secondes = newScore % 60;
    const minutes = ((newScore - secondes) / 60) % 60;
    const heures = (((newScore - secondes) / 60) - minutes) / 60;
    if (heures === 0 && minutes === 0) {
      if (secondes === 1) {
        return secondes + " seconde";
      } else {
        return secondes + " secondes";
      }
    }
    if (heures === 0 && secondes === 0) {
      if (minutes === 1) {
        return minutes + " minute";
      } else {
        return minutes + " minutes";
      }
    }
    if (minutes === 0 && secondes === 0) {
      if (heures === 1) {
        return heures + " heure";
      } else {
        return heures + " heures";
      }
    }
    if (heures === 0 && (minutes !== 0 && secondes !== 0)) {
      if (minutes === 1) {
        if (secondes === 1) {
          return minutes + " minute et " + secondes + " seconde";
        } else {
          return minutes + " minute et " + secondes + " secondes";
        }
      } else {
        if (secondes === 1) {
          return minutes + " minutes et " + secondes + " seconde";
        } else {
          return minutes + " minutes et " + secondes + " secondes";
        }
      }
    }
    if (minutes === 0 && (heures !== 0 && secondes !== 0)) {
      if (heures === 1) {
        if (secondes === 1) {
          return heures + " heure et " + secondes + " seconde";
        } else {
          return heures + " heure et " + secondes + " secondes";
        }
      } else {
        if (secondes === 1) {
          return heures + " heures et " + secondes + " seconde";
        } else {
          return heures + " heures et " + secondes + " secondes";
        }
      }
    }
    if (secondes === 0 && (heures !== 0 && minutes !== 0)) {
      if (heures === 1) {
        if (minutes === 1) {
          return heures + " heure et " + minutes + " minute";
        } else {
          return heures + " heure et " + minutes + " minutes";
        }
      } else {
        if (minutes === 1) {
          return heures + " heures et " + minutes + " minute";
        } else {
          return heures + " heures et " + minutes + " minutes";
        }
      }
    }
    if (heures !== 0 && minutes !== 0 && secondes !== 0) {
      if (heures === 1 && minutes === 1 && secondes === 1) {
        return heures + " heure, " + minutes + " minute et " + secondes + " seconde";
      }
      if (heures > 1 && minutes > 1 && secondes > 1) {
        return heures + " heures, " + minutes + " minutes et " + secondes + " secondes";
      }
      if (heures > 1 && (minutes === 1 && secondes === 1)) {
        return heures + " heures, " + minutes + " minute et " + secondes + " seconde";
      }
      if (minutes > 1 && (heures === 1 && secondes === 1)) {
        return heures + " heure, " + minutes + " minutes et " + secondes + " seconde";
      }
      if (secondes > 1 && (heures === 1 && minutes === 1)) {
        return heures + " heure, " + minutes + " minute et " + secondes + " secondes";
      }
      if (heures === 1 && (minutes > 1 && secondes > 1)) {
        return heures + " heure, " + minutes + " minutes et " + secondes + " secondes";
      }
      if (minutes === 1 && (heures > 1 && secondes > 1)) {
        return heures + " heures, " + minutes + " minute et " + secondes + " secondes";
      }
      if (secondes === 1 && (heures > 1 && minutes > 1)) {
        return heures + " heures, " + minutes + " minutes et " + secondes + " seconde";
      }
    }
  }

  return (
    <div className='epilogue'>
      <h1>L'épilogue de l'histoire :</h1>
      <p className='history'>Mes recherches ont abouti. J’ai découvert une technologie permettant à la matière d’être déphasé, la rendant totalement invisible et immatériel. Ayant peur de l’utilisation que l’humanité pourrait faire de cette technologie, j’ai choisi de disparaître en détruisant toute trace de mes recherches et en emportant le seul prototype que j’avais créé.</p>
      <p className='history'>Cependant, j’ai pris le temps de laisser des traces dans mon ordinateur, dans le but de te permettre de me retrouver.</p>
      <p className='history'>Erika, je voulais que tu saches que je ne suis jamais réellement parti, mais puisque je suis invisible, tu ne pouvais pas le savoir. Sache que je réapparaîtrais quand le moment sera venu...</p>
      <div className='submit-button'>
        <Link to="/best-players" >
          < button className='button-normal'>Accèder aux scores</button>
        </Link>
      </div >
      {newScore > 0 ? (
        <p>Vous avez terminé en {verifyPlural()}.</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Epilogue;