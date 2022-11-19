export default function SugestaoCard(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.imagemUsuario} alt={props.nomeUsuario} />
        <div className="texto">
          <div className="nome">{props.nomeUsuario}</div>
          <div className="razao">{props.motivoSugestao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
