# ProjetoForm
## Introdução
O projeto é feito em uma base REACT. Têm três principais paginas sendo o Home, a página de Registro e uma página de consulta.
A consulta é de curta duração pois é feita com Redux, a ideia é aprofunda-la com o tempo. Também foi tentada a conexão com banco de dados usando o fetch(), mas não deu certo pois ele não conseguia emitir para localhost.

## Formulário
O formulário consiste em onze peguntas padrões para um registro básico(sem senha)
<form>
  <ul>
    <li> Nome </li>
    <li> Email </li>
    <li> Celular </li>
    <li> Telefone </li>
  </ul>
  <ul>
    <li> CEP </li>
    <li> Rua </li>
    <li> Número </li>
    <li> Complemento </li>
  </ul>
  <ul>
    <li> Cidade </li>
    <li> Bairro </li>
    <li> Estado </li>
    <li><s>Pais</s> (acabamos tirando)</li>
  </ul>
</form>

## O envio dos dados

A function onSubmit do formulário armazena as informações pelo dispatch(clientActions.seClient(client)); e esse "client" será puxado na página showClients

--Form onSubmit

` const onSubmit = (data) => {
    const client = data;
    dispatch(clientActions.setClient(client));
    navigate('/');
};` 


--show clients


` const ShowClients = () => {
  const data = useSelector((state) => state.client);
  console.log(data[0]);
  const dataMap = data.map((client, index) => {
    const key = 'client-${client}-${index}'; `
