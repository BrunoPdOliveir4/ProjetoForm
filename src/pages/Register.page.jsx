/* eslint-disable react/jsx-props-no-spreading */
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import DefaultInput from '../components/DefaultInput';
// eslint-disable-next-line import/named
import { clientActions } from '../store/modules/client';
import Header from '../components/Header/Header';

const maskCel = (value) => value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\d{5})(\d)/, '$1-$2')
  .replace(/(-\d{4})(\d+?)$/, '$1');

const maskPhone = (value) => value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d{1-9})/, '($1) $2')
  .replace(/(\d{4})(\d)/, '$1-$2')
  .replace(/(-\d{4})(\d+?)$/, '$1');

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
      nome: 'Awari WD',
      email: 'teste@teste.com',
      tel: '987121234',
      cep: '15555-000',
      rua: 'Rua X',
      numero: '0000',
      complemento: 'complemento',
      bairro: 'bairro Y',
      cidade: 'São Paulo',
      estado: 'São Paulo',
    },
  });

  /*   const onSubmit = (data) => {
      const {
        name, email, cel, tel, cep, rua, numero, complemento, bairro, cidade, estado,
      } = data;
      // eslint-disable-next-line max-len
      dispatch(clientActions.setClient(
        name, email, cel, tel, cep, rua, numero, complemento, bairro, cidade, estado));
      navigate('/'); */
};
const [tel, setPhone] = useState('');
const [cel, setCel] = useState('');
const [cep, setCep] = useState('');

const checkCEP = (e) => {
  const codigoPostal = e.target.value.replace(/\D/g, '');
  fetch(`https://viacep.com.br/ws/${codigoPostal}/json/`).then((res) => res.json()).then((data) => {
    // register({ name: 'address', value: data.logradouro });
    setValue('rua', data.logradouro);
    setValue('bairro', data.bairro);
    setValue('cidade', data.localidade);
    setValue('estado', data.uf);
    setFocus('numero');
  });
};
const handleClickRegister = (data) => {
  fetch('https://localhost:3001/registro', {
    method: "POST",
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
    })
  }).then();
  /* const {
    name, email, cel, tel, cep, rua, numero, complemento, bairro, cidade, estado,
  } = data;
  // eslint-disable-next-line max-len
  dispatch(clientActions.setClient(
    name, email, cel, tel, cep, rua, numero, complemento, bairro, cidade, estado));
  navigate('/');
};*/

  return (
    <>
      <Header />
      <div>
        <h1>Cadastro</h1>
        <Formik initialValues={{}} onSubmit={handleClickRegister}>
          <Form>
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
              name="cel"
              render={({ field }) => {
                const { name } = field;
                return (
                  <DefaultInput name={name} onChange={(e) => setCel(maskCel(e.target.value))} value={cel} label="Celular:" minLength={15} placeholder="(00)00000-0000" required />
                );
              }}
            />
            <Controller
              control={control}
              name="tel"
              render={({ field }) => {
                const { name } = field;
                return (
                  <DefaultInput name={name} onChange={(e) => setPhone(maskPhone(e.target.value))} value={tel} label="Telefone:" minLength={14} placeholder="(00) 0000-0000" />
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
                    <label>
                      CEP:
                      <input name={name} onChange={(e) => setCep(maskCep(e.target.value))} onBlur={checkCEP} value={cep} minLength={9} placeholder="00000-000" />
                    </label>
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
            <button type="submit">Enviar</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegisterPage;
