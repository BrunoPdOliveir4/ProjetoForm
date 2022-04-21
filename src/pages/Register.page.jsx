import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '../components/DefaultInput';

const RegisterPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      nome: 'Vinicius F',
      email: 'teste@teste.com',
      tel: '987121234',
      cep: '15555000',
      rua: 'Rua X',
      numero: '0000',
      complemento: 'complemento',
      bairro: 'bairro Y',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      pais: 'Brasil',
    },
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="nome"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Nome:" />
            );
          }}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="email" label="E-mail:" />
            );
          }}
        />
        <Controller
          control={control}
          name="tel"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="number" label="Telefone:" />
            );
          }}
        />
        <Controller
          control={control}
          name="cep"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="number" label="CEP:" />
            );
          }}
        />
        <Controller
          control={control}
          name="rua"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Rua:" />
            );
          }}
        />
        <Controller
          control={control}
          name="numero"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="number" label="Número:" />
            );
          }}
        />
        <Controller
          control={control}
          name="complemento"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Complemento:" />
            );
          }}
        />
        <Controller
          control={control}
          name="bairro"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Bairro:" />
            );
          }}
        />
        <Controller
          control={control}
          name="cidade"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Cidade:" />
            );
          }}
        />
        <Controller
          control={control}
          name="estado"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Estado:" />
            );
          }}
        />
        <Controller
          control={control}
          name="pais"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="text" label="País:" />
            );
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
