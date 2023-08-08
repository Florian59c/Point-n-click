import { useState, useEffect } from 'react';
import './css/FinalFile.css';
import { Link } from 'react-router-dom';
import { useGetProfileQuery, useGetUsersQuery, useUpdateUserBestScoreMutation } from '../../gql/generated/schema';

function FinalFile() {

  const [startTime, setStartTime] = useState(0);
  const { data: currentUser } = useGetProfileQuery({ errorPolicy: 'ignore' });
  console.log(currentUser);

  // récupere tous les utilisateurs
  const { data } = useGetUsersQuery();
  const users = data?.getUsers || [];

  // trouve le currentUser parmis les users et recupere son bestScore
  const currentUserBestScore = users.find((user) => user.id === currentUser?.profile.id)?.bestScore;
  console.log(currentUserBestScore);

  const [updateBestScore] = useUpdateUserBestScoreMutation();

  // recupere le donnée startTime dans le local storege et la stocke dans le state au 1er chargement de la page
  useEffect(() => {
    const startTime = JSON.parse(localStorage.getItem('startTime'));
    if (startTime) {
      setStartTime(startTime);
    }
  }, []);

  async function endDate() {
    if (startTime <= 0) {
      alert("Impossible de calculer le score, car il n'y a pas de valeur de départ");
    } else {
      const endTime = Date.now();
      const newScore = Math.trunc((endTime - startTime) / 1000);
      // envoie du score dans le localStorage suivante pour l'afficher dans la page suivante
      localStorage.setItem('newScore', JSON.stringify(newScore));

      console.log("startTime : " + startTime);
      console.log("endTime : " + endTime);
      console.log("newScore : " + newScore);

      // envoie le score dans la table bestScore du currentUser, s'il existe et si son nouveaux score est meilleur que l'ancien
      if (currentUser !== null || typeof currentUser !== "undefined") {
        if (newScore < currentUserBestScore) {
          const currentUserId = currentUser?.profile?.id;
          console.log(currentUserId);
          try {
            await updateBestScore({ variables: { data: { userId: currentUserId, newBestScore: newScore } } });
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
  }

  return (
    <div className='final_file' onClick={endDate}>
      <Link to="/epilogue">
        <p>message cliquable de fin sous condition</p>
      </Link>
    </div>
  );
}

export default FinalFile;