// La page d'entrée ou on tape le mdp utilisateur
import { useFindGameCodeQuery } from '../../gql/generated/schema';
import './css/StartPage.css';

function StartPage() {

  const pageCode = useFindGameCodeQuery({ variables: { data: "StartPage" } });
  const gameCode = pageCode?.data?.findGameCode;

  console.log("le code de la page est dans la constante gameCode et vaux : " + gameCode);

  return (
    <div>
      <p>StartPage</p>
    </div>
  );
}

export default StartPage;