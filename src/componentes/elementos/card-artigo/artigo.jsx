import "./artigo.scss";

export default function ElementoArtigo({ img, titulo, descricao }) {
  return (
    <article className="Artigo">
      {img ? <img className="imagem" src={img} alt={titulo} /> : null}
      <div className="body">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </article>
  );
}
