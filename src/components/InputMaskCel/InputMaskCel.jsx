/* eslint-disable react/destructuring-assignment */
import InputMask from 'react-input-mask';
import * as Style from './InputMaskCel.style';

const Input = (props) => (
  <Style.Container>
    <Style.Label htmlFor={props.name}>{props.name}</Style.Label>
    <InputMask mask="(99) 99999-9999" className="inputmask" value={props.value} onChange={props.onChange} />
  </Style.Container>
);

export default Input;
