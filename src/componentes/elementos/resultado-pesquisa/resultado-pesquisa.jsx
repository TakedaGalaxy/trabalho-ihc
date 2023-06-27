import "./resultado-pesquisa.scss";

export default function ElementoResultadoPesquisa({
  titulo,
  resultado,
  referencias,
}) {
  console.log(resultado)
  return (
    <div className="ResultadoPesquisa">
      <h2 className="titulo">{titulo}</h2>
      <div className="containerResultados">
        {resultado.map(({ texto, listaReferencias }, indexResultado) => (
          <div key={indexResultado} className="resultado">
            <span>{texto}</span>
            <div className="containerRefereciasNumeros">
              {listaReferencias.map((item, indexReferencia) => (
                <span key={indexReferencia} className="numeroReferencia">{item}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="containerReferencias">
        {referencias.map(({ numero, nome }, indexReferencia) => (
          <div key={numero} className="referencia">
            <span className="numeroReferencia">{numero}</span>
            <span>{nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
