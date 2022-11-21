import React from "react";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  const [nome, setNome] = React.useState("Catana");
  const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")

  function verificaNome() {
    const nomeRecebido = prompt("Digite o link da imagem:");
    if(nomeRecebido) {
      setNome(nomeRecebido);
    }
  }

  function verificaImagem() {
    const imagemRecebida = prompt("Digite o link da imagem:");
    if(imagemRecebida) {
      setImagem(imagemRecebida);
    }
  }
  
  return (
    <div className="sidebar">
      <div className="usuario" data-test="user">
        <img src={imagem} alt={nome} onClick={verificaImagem} data-test="profile-image"/>
        <div className="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
            {nome}
            <ion-icon name="pencil" onClick={verificaNome} data-test="edit-name"></ion-icon>
          </span>
        </div>
      </div>

      <Sugestoes />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
