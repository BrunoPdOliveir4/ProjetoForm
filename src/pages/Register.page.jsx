/* eslint-disable react/jsx-props-no-spreading */
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DefaultInput from '../components/DefaultInput';
import { clientActions } from '../store/modules/client';
import Header from '../components/Header/Header';
import InputMaskCel from '../components/InputMaskCel';
import InputMaskTel from '../components/InputMaskTel';

const maskCep = (value) => value
  .replace(/\D/g, '')
  .replace(/(\d{5})(\d)/, '$1-$2')
  .replace(/(-\d{3})(\d+?)$/, '$1');

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit, setValue, setFocus, control,
  } = useForm({
    defaultValues: {
      nome: '',
      email: '',
      cel: '',
      tel: '',
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  });

  const onSubmit = (data) => {
    const client = data;
    console.log(data);
    /* fetch(':3001/registro', {
      method: 'POST',
      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        cel: data.cel,
        tel: data.tel,
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
      }),
    }).then((resposta) => {
      console.log(resposta);
    }); */
    // eslint-disable-next-line max-len
    dispatch(clientActions.setClient(client));
    navigate('/');
  };

  const [cep, setCep] = useState('');

  const checkCEP = (e) => {
    const codigoPostal = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${codigoPostal}/json/`).then((res) => res.json()).then((data) => {
      // register({ name: 'address', value: data.logradouro });
      setValue('rua', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
      setValue('pais', 'Brasil');
      setFocus('numero');
    });
  };
  return (
    <>
      <Header />
      <h1 className="title-page"> Preencha seus dados </h1>
      <div className="container-register">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="nome"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Nome" />
              );
            }}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="email" label="E-mail" required />
              );
            }}
          />
          <Controller
            control={control}
            name="cel"
            render={({ field }) => {
              const { name, value, onChange } = field;
              return (
                <InputMaskCel name={name} value={value} onChange={onChange} required />

              );
            }}
          />
          <Controller
            control={control}
            name="tel"
            render={({ field }) => {
              const { name, value, onChange } = field;
              return (
                <InputMaskTel name={name} value={value} onChange={onChange} required />
              );
            }}
          />
          <div>
            <Controller
              control={control}
              name="cep"
              render={({ field }) => {
                const { name } = field;
                return (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                  <DefaultInput
                    name={name}
                    onChange={(e) => setCep(maskCep(e.target.value))}
                    onBlur={checkCEP}
                    value={cep}
                    label="CEP"
                    minLength={9}
                    placeholder="00000-000"
                  />
                );
              }}
            />
          </div>
          <Controller
            control={control}
            name="rua"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Rua" />
              );
            }}
          />
          <Controller
            control={control}
            name="numero"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="number" label="N??mero" />
              );
            }}
          />
          <Controller
            control={control}
            name="complemento"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Complemento" />
              );
            }}
          />
          <Controller
            control={control}
            name="bairro"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Bairro" />
              );
            }}
          />
          <Controller
            control={control}
            name="cidade"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Cidade" />
              );
            }}
          />
          <Controller
            control={control}
            name="estado"
            render={({ field }) => {
              const { name, onChange, value } = field;
              return (
                <DefaultInput name={name} onChange={onChange} value={value} type="text" label="Estado" />
              );
            }}
          />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
