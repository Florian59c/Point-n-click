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
    <div>
      {typeof data === "undefined" ? (
        <p>Impossible de recupérer les utilisateurs depuis l'API</p>
      ) : (
        bestUsers.map((bestUser) => (
          <div key={bestUser.id}>
            <p>{bestUser.pseudo}</p>
            <p>{convertScore(bestUser.bestScore)}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BestPlayers;