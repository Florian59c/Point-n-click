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
    <div>
      <p>Prologue</p>
      <Link to="/start-page" >
        < button onClick={startDate}>Commencer</button>
      </Link>
    </div >
  );
}

export default Prologue;