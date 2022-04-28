import * as Style from './ShowClients.style';

const ShowClients = () => {
  const data = [
    {
      bairro: 'Barro 1',
      cel: '11111111111',
      cep: '12345789',
      cidade: 'São Paulo',
      complemento: 'apto 2',
      email: 'maria@gmail.com',
      estado: 'SP',
      nome: 'Maria',
      numero: '1111',
      pais: 'Brasil',
      rua: 'Rua 1',
      tel: '11111111',
    },
    {
      bairro: 'Barro 2',
      cel: '222222222222',
      cep: '12345789',
      cidade: 'São Paulo',
      complemento: 'apto 2',
      email: 'joao@gmail.com',
      estado: 'SP',
      nome: 'João',
      numero: '1111',
      pais: 'Brasil',
      rua: 'Rua 2',
      tel: '22222222',
    },
    {
      bairro: 'Barro 3',
      cel: '33333333333',
      cep: '12345789',
      cidade: 'São Paulo',
      complemento: 'apto 3',
      email: 'jose@gmail.com',
      estado: 'SP',
      nome: 'José',
      numero: '1111',
      pais: 'Brasil',
      rua: 'Rua 3',
      tel: '22222222',
    },
  ];

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
