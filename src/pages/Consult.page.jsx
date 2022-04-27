import { Link, useNavigate } from 'react-router-dom';
import { Header, ShowClient } from '../components';
import DefaultConsulta from '../components/DefaultConsulta';

const ConsultPage = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <h1>Consultar clientes</h1>
      <form>
        <DefaultConsulta />
        <ShowClient />
      </form>
      <ul>
        <li>
          <Link to="/register">Registre-se</Link>
        </li>
        <li>
          <input type="button" onClick={handleLogoutClick} value="Sair" />
        </li>
      </ul>
    </div>
  );
};

export default ConsultPage;
