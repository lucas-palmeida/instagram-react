import React from "react";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  const [nome, setNome] = React.useState("Catana");
  const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")
  return (
    <div class="sidebar">
      <div class="usuario" data-test="user">
        <img src={imagem} alt={nome} onClick={() => setImagem(prompt("Digite o link da imagem:"))} data-test="profile-image"/>
        <div class="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
            {nome}
            <ion-icon name="pencil" onClick={() => setNome(prompt("Digite o novo nome:"))} data-test="edit-name"></ion-icon>
          </span>
        </div>
      </div>

      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
