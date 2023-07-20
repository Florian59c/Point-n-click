import { useState, useEffect } from 'react';
import './css/FinalFile.css';
import { Link } from 'react-router-dom';

function FinalFile() {

  const [startTime, setStartTime] = useState(0);

  // recupere le donnée startTime dans le local storege et la stocke dans le state au 1er chargement de la page
  useEffect(() => {
    const startTime = JSON.parse(localStorage.getItem('startTime'));
    if (startTime) {
      setStartTime(startTime);
    }
  }, []);

  function endDate() {
    if (startTime <= 0) {
      alert("Impossible de calculer le score, car il n'y a pas de valeur de départ");
    } else {
      const endTime = Date.now();
      const score = Math.trunc((endTime - startTime) / 1000);

      console.log("startTime : " + startTime);
      console.log("endTime : " + endTime);
      console.log("score : " + score);

      // envoyer le score dans la table bestScore du currentUser

    }
  }

  return (
    <Link to="/epilogue">
      <div className='final_file' onClick={endDate}>
        <p>message cliquable de fin sous condition</p>
      </div>
    </Link>
  );
}

export default FinalFile;