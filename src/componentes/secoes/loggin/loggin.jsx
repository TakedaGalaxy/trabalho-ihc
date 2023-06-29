import "./loggin.scss";
import {
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

export default function SecaoLoggin({ ativo, setLogginAtivo }) {
  return (
    <section className={`SecaoLoggin ${ativo ? "ativo" : ""}`}>
      <div className="cardLoggin">
        <AiOutlineClose
          className="iconeClose"
          onClick={() => {
            setLogginAtivo(false);
          }}
        />
        <div className="containerLoggin">
          <Row>
            <Col lg={12} className="containerIcone">
              <BiSolidUser className="icone" />
            </Col>
            <Col lg={12} className="containerEntradas">
              <InputGroup className="entrada">
                <FloatingLabel label="Email do usuário">
                  <Form.Control className="entrada" />
                </FloatingLabel>
              </InputGroup>
              <InputGroup className="entrada">
                <FloatingLabel label="Senha do usuário">
                  <Form.Control className="entrada" />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col lg={12} className="containerBotao">
              <Button className="botao" variant="btn">
                Entrar
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
