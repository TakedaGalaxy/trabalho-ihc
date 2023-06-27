import "./App.scss";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ElemetnoMenu from "./componentes/elementos/menu/menu";
import PaginaInicial from "./paginas/inicial/inicial";

function App() {
  const [rotaAtual, setRotaAtual] = useState({ titulo: "", componente: <PaginaInicial /> });

  return (
    <div className="App">
      <Row className="RowPrincipal">
        <Col className="ContainerMenu" lg={2}>
          <ElemetnoMenu rotaAtual={rotaAtual} setRota={setRotaAtual} />
        </Col>
        <Col className="ContainerPagina" lg={10}>
          {rotaAtual.componente}
        </Col>
      </Row>
    </div>
  );
}

export default App;
