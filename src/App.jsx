import { Col, Row } from "react-bootstrap";
import "./App.scss";
import ElemetnoMenu from "./componentes/elementos/menu/menu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Row className="RowPrincipal">
        <Col className="ContainerMenu" lg={2}>
          <ElemetnoMenu />
        </Col>
        <Col className="ContainerPagina" lg={10}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default App;
