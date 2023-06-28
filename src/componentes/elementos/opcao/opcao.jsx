import "./opcao.scss";

export default function ElementoOpcao({ icone, escrita }) {
  return (
    <div className="Opcao">
      {icone}
      <span className="texto">{escrita}</span>
    </div>
  );
}
