// import { useState } from 'react';
import { useGet10BestUsersQuery } from '../../gql/generated/schema';
import './css/BestPlayers.css';
// import { useQuery, gql } from '@apollo/client';

// // https://www.apollographql.com/docs/react/get-started/
// const Get_Best_Players = gql`
// query Users {
//   getUsers {
//     id
//     pseudo
//   }
// }
// `;

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

  // const [users, setUsers] = useState([]);
  // const [error, setError] = useState("");

  // const getBestPlayers = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:4001/users');
  //     console.log(res.data);
  //     setUsers(res.data);
  //   } catch (error) {
  //     console.error(error);
  //     setError("impossible de recupérer les utilisateurs depuis l'API");
  //   }
  // };

  // useEffect(() => {
  //   getBestPlayers();
  // }, []);

  return (
    <div>
      {typeof data === "undefined" ? (
        <p>Impossible de recupérer les utilisateurs depuis l'API</p>
      ) : (
        bestUsers.map((bestUser) => (
          <div>
            <p key={bestUser.id}>{bestUser.pseudo}</p>
            <p key={bestUser.id}>{convertScore(bestUser.bestScore)}</p>
          </div>
        ))
      )}

      {/* {error ? <div className='error'>{error}</div> : null} */}
      {/* {users.map((user) => (
        <p key={user.id}>{user.pseudo}</p>
      ))} */}
    </div>
  );
}

export default BestPlayers;