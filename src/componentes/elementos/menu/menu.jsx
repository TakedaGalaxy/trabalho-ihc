import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import "./menu.scss";

import { BiSearchAlt2 } from "react-icons/bi";

function BotaoMenu({ escrita, icone, link, ativo }) {
  return (
    <div className="BotaoMenu">
      <Link className="ancora" to={link}>
        <button className={`botao ${ativo ? "ativo" : ""}`}>
          <span>{escrita}</span>
          {icone}
        </button>
      </Link>
    </div>
  );
}

export default function ElemetnoMenu() {
  const rotaAtual = useLocation().pathname.split("/").at(1) ?? "";

  return (
    <div className="MenuDescktop">
      <BotaoMenu
        escrita={"Pesquisar"}
        icone={<BiSearchAlt2 size={30} />}
        link={"pesquisar"}
        ativo={rotaAtual == "pesquisar"}
      />

      <BotaoMenu
        escrita={"Destaques"}
        icone={<BiSearchAlt2 size={30} />}
        link={"destaques"}
        ativo={rotaAtual == "destaques"}
      />

      <BotaoMenu
        escrita={"Salvos"}
        icone={<BiSearchAlt2 size={30} />}
        link={"salvos"}
        ativo={rotaAtual == "salvos"}
      />

      <BotaoMenu
        escrita={"Histórico"}
        icone={<BiSearchAlt2 size={30} />}
        link={"historico"}
        ativo={rotaAtual == "historico"}
      />
    </div>
  );
}
