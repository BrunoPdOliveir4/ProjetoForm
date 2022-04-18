import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '../components/DefaultInput';
import { Header } from '../components';

const RegisterPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: 'Vinicius F',
      email: 'teste@teste.com',
      password: '123',
    },
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <div>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} />
              );
            }}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="email" />
              );
            }}
          />
          <Controller
            control={control}
            name="Telefone"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="number" />
              );
            }}
          />
          <Controller
            control={control}
            name="CEP"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="number" />
              );
            }}
          />
          <Controller
            control={control}
            name="Rua"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" />
              );
            }}
          />
          <Controller
            control={control}
            name="Número"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="number" />
              );
            }}
          />
          <Controller
            control={control}
            name="Complemento"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" />
              );
            }}
          />
          <Controller
            control={control}
            name="Bairro"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" />
              );
            }}
          />
          <Controller
            control={control}
            name="Cidade"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" />
              );
            }}
          />
          <Controller
            control={control}
            name="Estado"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" />
              );
            }}
          />
          <Controller
            control={control}
            name="País"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" />
              );
            }}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
