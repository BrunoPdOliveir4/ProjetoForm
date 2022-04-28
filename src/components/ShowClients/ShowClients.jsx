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
            Celular:&nbsp;
            {client.cel}
          </Style.Paragraph>
          <Style.Paragraph>
            Telefone:&nbsp;
            {client.tel}
          </Style.Paragraph>
          <Style.Paragraph>
            Cep:&nbsp;
            {client.cep}
          </Style.Paragraph>
          <Style.Paragraph>
            Rua:&nbsp;
            {client.rua}
          </Style.Paragraph>
          <Style.Paragraph>
            Numero:&nbsp;
            {client.numero}
          </Style.Paragraph>
          <Style.Paragraph>
            Complemento:&nbsp;
            {client.complemento}
          </Style.Paragraph>
          <Style.Paragraph>
            Cidade:&nbsp;
            {client.cidade}
          </Style.Paragraph>
          <Style.Paragraph>
            Bairro:&nbsp;
            {client.bairro}
          </Style.Paragraph>
          <Style.Paragraph>
            Estado:&nbsp;
            {client.estado}
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
