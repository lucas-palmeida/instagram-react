export default function SugestaoCard(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagemUsuario} alt={props.nomeUsuario} />
        <div class="texto">
          <div class="nome">{props.nomeUsuario}</div>
          <div class="razao">{props.motivoSugestao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
