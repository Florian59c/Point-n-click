import { useFindGameCodeQuery } from '../../gql/generated/schema';
import './css/PwdGenerator.css';

function PwdGenerator() {

  const mailBoxCode = useFindGameCodeQuery({ variables: { data: "MailBox" } }).data?.findGameCode;
  // const 2ndcode = useFindGameCodeQuery({ variables: { data: "// le name du jeu dans la bdd//" } }).data?.findGameCode;

  console.log(mailBoxCode);

  return (
    <div>
      <p>PwdGenerator</p>
    </div>
  );
}

export default PwdGenerator;