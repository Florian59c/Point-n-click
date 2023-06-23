import { useEffect, useState } from 'react';
import './css/BestPlayers.css';
import axios from 'axios';

function BestPlayers() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const getBestPlayers = async () => {
    try {
      const res = await axios.get('http://localhost:4000/users');
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.error(error);
      setError("impossible de recupérer les utilisateurs depuis l'API");
    }
  };

  useEffect(() => {
    getBestPlayers();
  }, []);

  return (
    <div>
      {error ? <div className='error'>{error}</div> : null}
      {users.map((user) => (
        <p>{user.pseudo}</p>
      ))}
    </div>
  );
}

export default BestPlayers;