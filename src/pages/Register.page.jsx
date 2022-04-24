import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '../components/DefaultInput';
import Header from '../components/Header/Header';
import { clientActions } from '../store/modules/client';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register, handleSubmit, setValue, setFocus, control,
  } = useForm({
    defaultValues: {
      nome: 'Vinicius F',
      email: 'teste@teste.com',
      tel: '987121234',
      cep: '15555-000',
      rua: 'Rua X',
      numero: '0000',
      complemento: 'complemento',
      bairro: 'bairro Y',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      pais: 'Brasil',
    },
  });

  const onSubmit = (e) => {
    const {
      name, email, tel, cep, rua, numero, complemento, bairro, cidade, estado, pais,
    } = e;
    // eslint-disable-next-line max-len
    dispatch(clientActions.setClient(name, email, tel, cep, rua, numero, complemento, bairro, cidade, estado, pais));
    navigate('/');
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) => res.json()).then((data) => {
      // register({ name: 'address', value: data.logradouro });
      setValue('rua', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
      setFocus('numero');
    });
  };

  return (
    <>
      <Header />
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
              const { name } = field;
              return (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <input name={name} type="number" {...register('cep')} onBlur={checkCEP} label="CEP:" />
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
    </>
  );
};

export default RegisterPage;
