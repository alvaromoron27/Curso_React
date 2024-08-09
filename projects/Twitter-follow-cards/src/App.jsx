import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css';

export function App() {

  const formatUsername = (userName) => `@${userName}`;

  const users = [
    {
      id: 1,
      userName: 'alvaromg00',
      name: 'Álvaro Morón González',
      isFollowing: false,
      urlImage: 'https://p4.wallpaperbetter.com/wallpaper/546/972/22/drive-wallpaper-preview.jpg'
    },
    {
      id: 2,
      userName: 'rberrendoe',
      name: 'Roberto Berrendo Eguino',
      isFollowing: false,
      urlImage: 'https://i.blogs.es/f2ba32/wallpapers-abduzeedo/1366_2000.jpg'
    },
    {
      id: 3,
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: false,
      urlImage: 'https://yt3.googleusercontent.com/ytc/AIdro_kv84TB3x0uLWcJwfLWDX0rA9R_r22ckPwvpWxsS5x29eE=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 4,
      userName: 'mouredev',
      name: 'Brais Moure',
      isFollowing: false,
      urlImage: 'https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 5,
      userName: 'ArtLove_',
      name: 'Art Love',
      isFollowing: false,
      urlImage: 'https://images.joseartgallery.com/100736/what-kind-of-art-is-popular-right-now.jpg'
    }
  ]

  return (
    <div className="oneTwitterFollowCard">
      <p className="oneTwitterFollowCard-title">A quien seguir</p>
      {
        users.map(({id, userName, name, isFollowing, urlImage}) => {
          return(
            <TwitterFollowCard 
              key={id}
              userName={userName}
              formatUsername={formatUsername}
              name={name}
              isFollowing={isFollowing}
              urlImage={urlImage}
            />
          )
        })
      }
    </div>
  );
}
