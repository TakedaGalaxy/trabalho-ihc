import "./listagem-salvos.scss";
import EstruturaContainer from "../../estruturas/container/container";
import { Row, Col } from "react-bootstrap";
import ElementoCardTopicoSalvo from "../../elementos/card-topico-salvo/card-topico-salvo";

export default function SecaoListagemSalvos() {
  return (
    <section className="SecaoListagemSalvos">
      <EstruturaContainer>
        <Row>
          <Col lg={12}>
            <h2>Topicos Salvos</h2>
            <hr />
          </Col>
          <Col lg={12} className="containerTipicoSalvo">
            <ElementoCardTopicoSalvo titulo={"GPU rendering"} />
          </Col>
          <Col lg={12} className="containerTipicoSalvo">
            <ElementoCardTopicoSalvo titulo={"GPU rendering"} />
          </Col>
          <Col lg={12} className="containerTipicoSalvo">
            <ElementoCardTopicoSalvo titulo={"GPU rendering"} />
          </Col>
          <Col lg={12} className="containerTipicoSalvo">
            <ElementoCardTopicoSalvo titulo={"GPU rendering"} />
          </Col>
        </Row>
      </EstruturaContainer>
    </section>
  );
}
