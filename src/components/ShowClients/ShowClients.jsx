import { useSelector } from 'react-redux';
import * as Style from './ShowClients.style';

const ShowClients = () => {
  const data = useSelector((state) => state.client);
  console.log(data[0]);
  const dataMap = data.map((client, index) => {
    const key = `client-${client}-${index}`;
    return (
      <Style.Div>
        <li key={key}>
          <Style.Paragraph>
            Nome:&nbsp;
            {client.nome}
          </Style.Paragraph>
          <Style.Paragraph>
            E-mail:&nbsp;
            {client.email}
          </Style.Paragraph>
          <Style.Paragraph>
            Cidade:&nbsp;
            {client.cidade}
          </Style.Paragraph>
        </li>
      </Style.Div>
    );
  });

  return (
    <div>
      <ul>
        {dataMap}
      </ul>
    </div>
  );
};

export default ShowClients;
