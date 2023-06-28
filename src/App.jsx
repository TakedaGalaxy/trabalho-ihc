import "./App.scss";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ElemetnoMenu from "./componentes/elementos/menu/menu";
import PaginaInicial from "./paginas/inicial/inicial";
import SecaoLoggin from "./componentes/secoes/loggin/loggin";

function App() {
  const [rotaAtual, setRotaAtual] = useState({
    titulo: "",
    componente: <PaginaInicial />,
  });
  const [logginAtivo, setLogginAtivo] = useState(false);

  return (
    <div className="App">
      <SecaoLoggin ativo={logginAtivo} setLogginAtivo={setLogginAtivo}/>
      <Row className="RowPrincipal">
        <Col className="ContainerMenu" lg={2}>
          <ElemetnoMenu rotaAtual={rotaAtual} setRota={setRotaAtual} setLogginAtivo={setLogginAtivo}/>
        </Col>
        <Col className="ContainerPagina" lg={10}>
          {rotaAtual.componente}
        </Col>
      </Row>
    </div>
  );
}

export default App;
