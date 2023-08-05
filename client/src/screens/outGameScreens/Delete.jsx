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
            } catch (err) {
                console.error(err);
            } finally {
                navigate("/register");
            }
        }
    }

    return (
        <div className='delete'>
            {currentUser ? (
                <div>
                    <p>Attention !</p>
                    <p>Si vous cliquez sur ce bouton, toutes les données liées a votre compte seront définitivement supprimées !!</p>
                    <button className='alert' onClick={deleteAccount}>Supprimer mon compte</button>
                </div>
            ) : (
                <div>
                    <p style={{ color: "white" }}>Vous n'êtes pas connecté</p>
                    <Link to="/login">
                        <button>Se connecter</button>
                    </Link>
                </div>
            )
            }
        </div >
    );
}

export default Delete;