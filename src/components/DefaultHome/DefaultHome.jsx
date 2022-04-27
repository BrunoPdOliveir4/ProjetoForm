import { Link } from 'react-router-dom';
import * as Style from './DefaultHome.style';

const DefaultHome = () => (
  <Style.Div>
    <Style.Title>Home</Style.Title>
    <Link to="/register">
      <Style.Paragraph>Cadastre-se</Style.Paragraph>
    </Link>
    <Link to="/consult">
      <Style.Paragraph>Consulta</Style.Paragraph>
    </Link>
  </Style.Div>
);

export default DefaultHome;
