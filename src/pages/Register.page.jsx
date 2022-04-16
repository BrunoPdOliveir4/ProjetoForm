import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import DefaultInput from '../components/DefaultInput';

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
          name="password"
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <DefaultInput name={name} onChange={onChange} value={value} type="password" />
            );
          }}
        />
        <button type="submit">Enviar</button>
      </form>
      <Link to="/login">Já possui uma conta? Faça o login</Link>
    </div>
  );
};

export default RegisterPage;
