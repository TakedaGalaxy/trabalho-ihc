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
              Sintetizar textos apartir da entrada do usuario, utilizando
              artigos acadêmicos
            </div>
            <div className="boxTexto">
              Levar em consideração o contexto dos dados, para melhorar a
              sintetização
            </div>
          </Col>
          <Col className="containerEscrita" lg={4}>
            <h2 className="subTitulo">Limitações</h2>
            <div className="boxTexto">
              Entradas muito simples afeta na precisão do que é esperado como
              resposta
            </div>
          </Col>
        </Row>
      </section>
    </EstruturaContainer>
  );
}
