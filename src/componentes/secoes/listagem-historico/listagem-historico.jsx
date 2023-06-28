import "./listagem-historico.scss";
import EstruturaContainer from "../../estruturas/container/container";
import { Row, Col } from "react-bootstrap";
import ElementoCardTopicoSalvo from "../../elementos/card-topico-salvo/card-topico-salvo";

export default function SecaoListagemHistorico() {
  return (
    <section className="SecaoListagemHistorico">
      <EstruturaContainer>
        <Row>
          <Col lg={12}>
            <h2>Histórico</h2> 
            <hr />
          </Col>
          <Col lg={12} className="containerTopicoHistorico">
            <ElementoCardTopicoSalvo titulo={"GPU rendering"} />
          </Col>
          <Col lg={12} className="containerTopicoHistorico">
            <ElementoCardTopicoSalvo titulo={"GPU rendering"} />
          </Col>
          <Col lg={12} className="containerTopicoHistorico">
            <ElementoCardTopicoSalvo titulo={"GPU rendering"} />
          </Col>
          <Col lg={12} className="containerTopicoHistorico">
            <ElementoCardTopicoSalvo titulo={"GPU rendering"} />
          </Col>
        </Row>
      </EstruturaContainer>
    </section>
  );
}
