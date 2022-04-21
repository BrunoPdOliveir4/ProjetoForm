/* eslint-disable jsx-a11y/label-has-associated-control */
const DefaultInput = ({
  name, onChange, value, type, maxLength, label,
}) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input name={name} onChange={onChange} value={value} type={type} maxLength={maxLength} />
  </div>
);

export default DefaultInput;
