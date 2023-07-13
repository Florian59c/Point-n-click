// import { useState } from 'react';
import { useGetUsersQuery } from '../../gql/generated/schema';
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

  const { data } = useGetUsersQuery();
  const users = data?.getUsers || [];
  console.log(data);
  console.log(users);
  console.log(users.length);

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
        users.map((user) => (
          <div>
            <p key={user.id}>{user.pseudo}</p>
            <p key={user.id}>{user.email}</p>
            <p key={user.id}>{user.bestScore}</p>
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