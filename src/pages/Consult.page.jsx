/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '../components';
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
