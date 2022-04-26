import * as Style from './DefaultInput.style';
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
const DefaultInput = ({
  name, onChange, onBlur, value, type, label, required, placeholder, minLength,
}) => (
  <Style.Container>
    <Style.Label htmlFor={label}>{label}</Style.Label>
    <Style.Input name={name} onChange={onChange} onBlur={onBlur} value={value} type={type} required={required} placeholder={placeholder} minLength={minLength} />
  </Style.Container>
);

export default DefaultInput;
