import { Link } from 'react-router-dom';
import { useGet10BestUsersQuery } from '../../gql/generated/schema';
import './css/BestPlayers.css';

function BestPlayers() {

  const { data } = useGet10BestUsersQuery();
  const bestUsers = data?.get10BestUsers || [];
  console.log(data);
  console.log(bestUsers);
  console.log(bestUsers.length);

  function convertScore(UserScore) {
    const secondes = UserScore % 60;
    const minutes = ((UserScore - secondes) / 60) % 60;
    const heures = (((UserScore - secondes) / 60) - minutes) / 60;
    const totalTime = heures + "h " + minutes + "m " + secondes + "s";
    return totalTime;
  }

  return (
    <div className='best-players'>
      <h1>Liste des 10 meilleurs joueurs :</h1>
      <div className='players-tab'>
        {typeof data === "undefined" ? (
          <div>
            <p>Impossible de recupérer les utilisateurs depuis l'API</p>
          </div>
        ) : (
          bestUsers.map((bestUser) => (
            <div className='player' key={bestUser.id}>
              <p>{bestUser.pseudo}</p>
              <p>{convertScore(bestUser.bestScore)}</p>
            </div>
          ))
        )}
      </div>
      <div className='submit-button'>
        <Link to="/" >
          < button className='button-normal'>Recommencer une partie</button>
        </Link>
      </div >
    </div>
  );
}

export default BestPlayers;