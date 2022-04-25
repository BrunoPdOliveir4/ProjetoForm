/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
const DefaultInput = ({
  name, onChange, onBlur, value, type, label, required, placeholder, minLength,
}) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input name={name} onChange={onChange} onBlur={onBlur} value={value} type={type} required={required} placeholder={placeholder} minLength={minLength} />
  </div>
);

export default DefaultInput;
