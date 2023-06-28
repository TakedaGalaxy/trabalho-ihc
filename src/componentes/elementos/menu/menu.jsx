import * as React from "react";
import "./menu.scss";
import { BiSearchAlt2, BiSolidStar, BiSolidUser } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { BsClockFill, BsGearFill } from "react-icons/bs";
import PaginaPesquisar from "../../../paginas/pesquisar/pesquisar";
import PaginaDestaques from "../../../paginas/destaques/destaques";
import PaginaSalvos from "../../../paginas/salvos/salvos";
import PaginaHistorico from "../../../paginas/historico/historico";

function BotaoMenu({ escrita, icone, pagina, ativo, setRota }) {
  return (
    <div className="BotaoMenu">
      <button
        className={`botao ${ativo ? "ativo" : ""}`}
        onClick={() => setRota({ titulo: escrita, componente: pagina })}
      >
        <span>{escrita}</span>
        {icone}
      </button>
    </div>
  );
}

export default function ElemetnoMenu({ rotaAtual, setRota }) {
  return (
    <div className="MenuDescktop">
      <div className="containerBotoes">
        <BotaoMenu
          escrita={"Pesquisar"}
          icone={<BiSearchAlt2 size={30} />}
          pagina={<PaginaPesquisar />}
          ativo={rotaAtual.titulo == "Pesquisar"}
          setRota={setRota}
        />

        <BotaoMenu
          escrita={"Destaques"}
          icone={<AiFillFire size={30} />}
          pagina={<PaginaDestaques />}
          ativo={rotaAtual.titulo == "Destaques"}
          setRota={setRota}
        />

        <BotaoMenu
          escrita={"Salvos"}
          icone={<BiSolidStar size={30} />}
          pagina={<PaginaSalvos />}
          ativo={rotaAtual.titulo == "Salvos"}
          setRota={setRota}
        />

        <BotaoMenu
          escrita={"Histórico"}
          icone={<BsClockFill size={30} />}
          pagina={<PaginaHistorico />}
          ativo={rotaAtual.titulo == "Histórico"}
          setRota={setRota}
        />
      </div>
      <div className="containerUsuario">
        <div className="logginUsuario">
          <BiSolidUser className="icone" />
          <span>Usuário 90</span>
          <BsGearFill className="iconeConfiguracoes"/>
        </div>
        <hr />
        <span>© Made by Takeda 2023</span>
      </div>
    </div>
  );
}
