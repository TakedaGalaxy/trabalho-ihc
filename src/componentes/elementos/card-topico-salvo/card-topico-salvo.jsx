import ElementoOpcao from "../opcao/opcao";
import "./card-topico-salvo.scss";
import { PiPathBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

export default function ElementoCardTopicoSalvo({ titulo }) {
  return (
    <div className="CardTopicoSalvo">
      <AiOutlineClose className="iconeRemover" />
      <div className="iconeContainer">
        <PiPathBold className="iconeCaminho" />
      </div>
      <h3>{titulo}</h3>
    </div>
  );
}
