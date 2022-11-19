import PostCard from "./PostCard";

export default function Posts() {
  const posts = [
    {
      imagemUsuario: "assets/img/meowed.svg",
      nomeUsuario: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
      imagemCurtidas: "assets/img/respondeai.svg",
      perfilCurtiu: "respondeai",
      numCurtidas: 101.523,
    },
    {
      imagemUsuario: "assets/img/barked.svg",
      nomeUsuario: "barked",
      imagemPost: "assets/img/dog.svg",
      imagemCurtidas: "assets/img/adorable_animals.svg",
      perfilCurtiu: "adorable_animals",
      numCurtidas: 99.159,
    },
  ];
  return (
    <div className="posts">
      {posts.map((p) => (
        <PostCard
          key={p.nomeUsuario}
          imagemUsuario={p.imagemUsuario}
          nomeUsuario={p.nomeUsuario}
          imagemPost={p.imagemPost}
          imagemCurtidas={p.imagemCurtidas}
          perfilCurtiu={p.perfilCurtiu}
          numCurtidas={p.numCurtidas}
        />
      ))}
    </div>
  );
}
