import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  const formatUsername = (userName) => `@${userName}`;

  const users = [
    {
      userName: 'pepemunoz_',
      name: 'Pepe Muñoz',
      isFollowing: false,
      urlImage: 'https://img.freepik.com/foto-gratis/luna-fotorrealista-paisaje-abstracto_23-2151158665.jpg'
    },
    {
      userName: 'alvaromg00',
      name: 'Álvaro Morón',
      isFollowing: true,
      urlImage: 'https://p4.wallpaperbetter.com/wallpaper/546/972/22/drive-wallpaper-preview.jpg'
    }
  ]

  return (
    <>
      {
        users.map(({userName, name, isFollowing, urlImage}) => {
          return(
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              formatUsername={formatUsername}
              name={name}
              isFollowing={isFollowing}
              urlImage={urlImage}
            />
          )
        })
      }
    </>
  );
}
