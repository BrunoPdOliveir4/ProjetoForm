import * as Style from './DefaultConsulta.style';

const searchInput = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const valor = e.target.value;
    console.log(valor);
  }
};

const DefaultConsult = () => (
  <Style.DivSearch>
    <Style.InputSearch type="text" placeholder="Procurar Cliente" tabIndex="0" onKeyDown={(e) => searchInput(e)} />
  </Style.DivSearch>
);

export default DefaultConsult;
