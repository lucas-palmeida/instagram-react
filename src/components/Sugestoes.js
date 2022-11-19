import SugestaoCard from "./SugestaoCard";

export default function Sugestoes() {
  const sugestoes = [
    {
      imagemUsuario: "assets/img/bad.vibes.memes.svg",
      nomeUsuario: "bad.vibes.memes",
      motivoSugestao: "Segue você",
    },
    {
      imagemUsuario: "assets/img/chibirdart.svg",
      nomeUsuario: "chibirdart",
      motivoSugestao: "Segue você",
    },
    {
      imagemUsuario: "assets/img/razoesparaacreditar.svg",
      nomeUsuario: "razoesparaacreditar",
      motivoSugestao: "Novo no Instagram",
    },
    {
      imagemUsuario: "assets/img/adorable_animals.svg",
      nomeUsuario: "adorable_animals",
      motivoSugestao: "Segue você",
    },
    {
      imagemUsuario: "assets/img/smallcutecats.svg",
      nomeUsuario: "smallcutecats",
      motivoSugestao: "Segue você",
    },
  ];
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((s) => (
        <SugestaoCard
          key={s.nomeUsuario}
          imagemUsuario={s.imagemUsuario}
          nomeUsuario={s.nomeUsuario}
          motivoSugestao={s.motivoSugestao}
        />
      ))}
    </div>
  );
}