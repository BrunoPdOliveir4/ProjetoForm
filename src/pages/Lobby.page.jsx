import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components';
import userActions from '../store/modules/user/user.actions';

const LobbyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleLogoutClick = () => {
    dispatch(userActions.logout());

    navigate('/');
  };

  const userName = user ? `Olá ${user.name}!` : '';

  return (
    <div>
      <Header />
      <h1>{userName}</h1>
      <ul>
        <li>
          <Link to="/users">Usuários</Link>
        </li>
        <li>
          <button type="button" onClick={handleLogoutClick}>Sair</button>
        </li>
      </ul>
    </div>
  );
};

export default LobbyPage;
