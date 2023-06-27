import "./pesquisar.scss";
import EstruturaContainer from "../../componentes/estruturas/container/container";
import SecaoPesquisa from "../../componentes/secoes/pesquisa/pesquisa";

export default function PaginaPesquisar() {
  return (
    <EstruturaContainer>
      <h1 style={{ display: "none" }}>Pesquisar</h1>
      <SecaoPesquisa />
      <SecaoPesquisa />
    </EstruturaContainer>
  );
}
