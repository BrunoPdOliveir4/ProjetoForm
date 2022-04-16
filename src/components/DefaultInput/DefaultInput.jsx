/* eslint-disable jsx-a11y/label-has-associated-control */
const DefaultInput = ({
  name, onChange, value, type, maxLength,
}) => (
  <div>
    <label htmlFor={name}>{name}</label>
    <input name={name} onChange={onChange} value={value} type={type} maxLength={maxLength} />
  </div>
);

export default DefaultInput;
