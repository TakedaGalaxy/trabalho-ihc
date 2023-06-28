import EstruturaContainer from "../../componentes/estruturas/container/container";
import "./inicial.scss";
import { Row, Col } from "react-bootstrap";

export default function PaginaInicial() {
  return (
    <EstruturaContainer className={"PaginaInicial"}>
      <section className="SecaoApresentacao">
        <Row>
          <Col lg={12}>
            <h1 className="titulo">Article Project</h1>
            <hr />
          </Col>
          <Col className="containerEscrita" lg={4}>
            <h2 className="subTitulo">Exemplos</h2>
            <div className="boxTexto">GPU rendering</div>
          </Col>
          <Col className="containerEscrita" lg={4}>
            <h2 className="subTitulo">Capacidade</h2>
            <div className="boxTexto">
              Sintetizar texto sobre uma determidana entrada com articos
              academicos
            </div>
            <div className="boxTexto">
              Utilizar o contexto para melhorar a sintetização
            </div>
          </Col>
          <Col className="containerEscrita" lg={4}>
            <h2 className="subTitulo">Limitações</h2>
            <div className="boxTexto">
              Ao passar pouco contexto se pode ter uma queda de precisão do que
              é requerido
            </div>
          </Col>
        </Row>
      </section>
    </EstruturaContainer>
  );
}
