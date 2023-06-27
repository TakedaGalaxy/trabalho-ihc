import "./pesquisa.scss";
import { Row, Col } from "react-bootstrap";
import ElementoResultadoPesquisa from "../../elementos/resultado-pesquisa/resultado-pesquisa";
import { BiSearchAlt2, BiSolidSave, BiStar } from "react-icons/bi/";

function ElementoOpcao({ icone, escrita }) {
  return (
    <div className="opcao">
      {icone}
      <span className="texto">{escrita}</span>
    </div>
  );
}

export default function SecaoPesquisa() {
  return (
    <section className="SecaoPesquisa">
      <Row>
        <Col lg={12} className="containerBarrraPesquisar">
          <input
            type="text"
            className="entradaTexto"
            placeholder="O que deseja pesquisar ?"
          />
          <BiSearchAlt2 className="icone" />
        </Col>
        <Col lg={12} className="containerBarrraOpcoes">
          <ElementoOpcao
            escrita={"Salvar"}
            icone={<BiStar className="icone" />}
          />
          <ElementoOpcao
            escrita={"Baixar"}
            icone={<BiSolidSave className="icone" />}
          />
        </Col>
        <Col lg={12}>
          <ElementoResultadoPesquisa
            titulo={"GPU rendering"}
            resultado={[
              {
                texto:
                  "GPU rendering is the process of using a graphics processing unit (GPU) to automatically create two- or three-dimensional images from a model using computer programs",
                listaReferencias: ["1", "2", "3", "4", "5"],
              },
              {
                texto:
                  "The rendering process benefits from the parallel data computation performed by the thousands of tiny, low-power cores found in GPUs",
                listaReferencias: ["1", "2", "3", "5"],
              },
              {
                texto:
                  "GPU rendering uses a graphics card for rendering in place of a CPU, which can significantly speed up the rendering process as GPUs are primarily designed for quick image rendering",
                listaReferencias: ["2", "3", "4"],
              },
              {
                texto:
                  "A typical workstation GPU will have 2000-3000 cores and run 100 or more threads of instructions",
                listaReferencias: ["3"],
              },
              {
                texto:
                  "The GPU rendering pipeline starts with the geometry pipe, where the GPU begins assembling 3D models with polys and triangles, building the geometry that comprises the object. The GPU then applies translation, rotation, and scaling to position vertices within the 3D world space, marking one of the first steps of assembling the finalized object placement in the frame. Once the vertices are dimensionally positioned, transforms are applied to the object to create the final image",
                listaReferencias: ["4"],
              },
              {
                texto:
                  "GPU rendering is in high demand for a variety of applications, including GPU-accelerated analytics, 3D model graphics, neural graphics processing in gaming, virtual reality, artificial intelligence innovation, and photorealistic rendering in industries such as architecture, animation, film, and product design",
                listaReferencias: ["2"],
              },
              {
                texto:
                  "Some of the top GPU rendering engines are OctaneRender, Redshift, and V-Ray",
                listaReferencias: ["5"],
              },
            ]}
            referencias={[
              { numero: "1", nome: "all3dp" },
              { numero: "2", nome: "heavy" },
              { numero: "3", nome: "escape-technology" },
              { numero: "4", nome: "blender" },
              { numero: "5", nome: "paperspace" },
            ]}
          />
        </Col>
      </Row>
    </section>
  );
}
