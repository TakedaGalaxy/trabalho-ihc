import "./listagem-destaques.scss";
import ElementoArtigo from "../../elementos/card-artigo/artigo";
import EstruturaContainer from "../../estruturas/container/container";
import { Row, Col } from "react-bootstrap";
import placeholder from "../../../imgs/placeholders/placeholder.PNG";

export default function SecaoListagemDestaques() {
  return (
    <EstruturaContainer>
      <section className="SecaoListafemDestaques">
        <Row>
          <Col lg={12}>
            <h2>
              Artigos em destaques da semana
              <hr />
            </h2>
          </Col>
          <Col lg={12} className="containerArtigoDestaque">
            <ElementoArtigo
              img={placeholder}
              titulo={"GPU rendering"}
              descricao={
                "GPU rendering is the process of using a graphics processing unit (GPU) to automatically create two- or three-dimensional images from a model using computer programs..."
              }
            />
          </Col>
          <Col lg={12} className="containerArtigoDestaque">
            <ElementoArtigo
              img={placeholder}
              titulo={"GPU rendering"}
              descricao={
                "GPU rendering is the process of using a graphics processing unit (GPU) to automatically create two- or three-dimensional images from a model using computer programs..."
              }
            />
          </Col>
          <Col lg={12} className="containerArtigoDestaque">
            <ElementoArtigo
              img={placeholder}
              titulo={"GPU rendering"}
              descricao={
                "GPU rendering is the process of using a graphics processing unit (GPU) to automatically create two- or three-dimensional images from a model using computer programs..."
              }
            />
          </Col>
        </Row>
      </section>
      <section className="ListagemTopicosDestaques">
        <Row>
          <Col lg={12}>
            <h2>
              Topicos em destaques da semana
              <hr />
            </h2>
          </Col>
          <Col lg={12} className="containerTopicoDestaque">
            <ElementoArtigo
              titulo={"GPU rendering"}
              descricao={
                "GPU rendering is the process of using a graphics processing unit (GPU) to automatically create two- or three-dimensional images from a model using computer programs..."
              }
            />
          </Col>
          <Col lg={12} className="containerTopicoDestaque">
            <ElementoArtigo
              titulo={"GPU rendering"}
              descricao={
                "GPU rendering is the process of using a graphics processing unit (GPU) to automatically create two- or three-dimensional images from a model using computer programs..."
              }
            />
          </Col>
          <Col lg={12} className="containerTopicoDestaque">
            <ElementoArtigo
              titulo={"GPU rendering"}
              descricao={
                "GPU rendering is the process of using a graphics processing unit (GPU) to automatically create two- or three-dimensional images from a model using computer programs..."
              }
            />
          </Col>
          <Col lg={12} className="containerTopicoDestaque">
            <ElementoArtigo
              titulo={"GPU rendering"}
              descricao={
                "GPU rendering is the process of using a graphics processing unit (GPU) to automatically create two- or three-dimensional images from a model using computer programs..."
              }
            />
          </Col>
        </Row>
      </section>
    </EstruturaContainer>
  );
}
