import React from 'react';

export default function PostCard(props) {
  const[salvar, setSalvar] = React.useState("bookmark-outline");
  const[gostar, setGostar] = React.useState("heart-outline");
  const[curtidas, setCurtidas] = React.useState(props.numCurtidas);

  function verificaLike() {
    if(gostar === "heart-outline") {
      setGostar("heart");
      setCurtidas(curtidas+0.001);
    } 
    else {
      setGostar("heart-outline");
      setCurtidas(curtidas-0.001);
    }
  }

  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemUsuario} alt={props.nomeUsuario} />
          {props.nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo" >
        <img src={props.imagemPost} alt={props.nomeUsuario} onDoubleClick={() => (gostar==="heart-outline") ? setGostar("heart") & setCurtidas(curtidas+0.001) : null} data-test="post-image"/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={gostar} onClick={verificaLike} data-test="like-post"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={salvar} onClick={() => (salvar === "bookmark-outline") ? setSalvar("bookmark") : setSalvar("bookmark-outline")} data-test="save-post"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtidas} alt={props.perfilCurtiu} />
          <div class="texto">
            Curtido por <strong>{props.perfilCurtiu}</strong> e{" "}
            <strong data-test="likes-number">outras {curtidas.toFixed(3)} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
