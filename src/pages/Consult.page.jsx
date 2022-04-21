import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components';

const ConsultPage = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <h1>Consultar clientes</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button type="button" onClick={handleLogoutClick}>Sair</button>
        </li>
      </ul>
    </div>
  );
};

export default ConsultPage;
