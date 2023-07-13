// La page d'entrée ou on tape le mdp utilisateur

import { useGetGamesQuery } from '../../gql/generated/schema';
import './css/StartPage.css';

function StartPage() {


  const { data } = useGetGamesQuery();
  const games = data?.getGames || [];
  console.log(data);
  console.log(games);
  console.log(games.length);


  return (
    <div>
      <p>StartPage</p>
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
}

export default StartPage;