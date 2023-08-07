import { Link, useNavigate } from 'react-router-dom';
import { useDeleteUserMutation, useGetProfileQuery } from '../../gql/generated/schema';
import './css/Delete.css';

function Delete() {

    const { data: currentUser, client } = useGetProfileQuery({ errorPolicy: 'ignore' });
    const [deleteUser] = useDeleteUserMutation();
    const navigate = useNavigate();

    async function deleteAccount() {
        if (currentUser !== null || typeof currentUser !== "undefined") {
            const userId = currentUser?.profile?.id;
            try {
                await deleteUser({ variables: { userId } });
                client.resetStore();
                navigate("/register");
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <div className='delete'>
            {currentUser ? (
                <div className='danger'>
                    <p>Attention !</p>
                    <p>Si vous cliquez sur ce bouton, toutes les données liées a votre compte seront définitivement supprimées !!</p>
                    <button className='button-alert' onClick={deleteAccount}>Supprimer mon compte</button>
                    <div className='return'>
                        <Link to="/">
                            <p>Retouner à la page d'accueil</p>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <p>Vous n'êtes pas connecté</p>
                    <Link to="/login">
                        <button className='button-normal'>Se connecter</button>
                    </Link>
                </div>
            )}
        </div >
    );
}

export default Delete;