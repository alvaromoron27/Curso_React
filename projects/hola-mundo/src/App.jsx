import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard
        userName="@inmamunozz_"
        name="Inma Muñoz"
        urlImage="https://pbs.twimg.com/profile_images/1698868639649177600/_yKNVwqd_400x400.jpg"
        isFollowing={false}
      />
      <TwitterFollowCard
        userName="@alvaromg00"
        name="Alvaro Morón"
        urlImage="https://p4.wallpaperbetter.com/wallpaper/546/972/22/drive-wallpaper-preview.jpg"
        isFollowing={true}
      />
    </>
  );
}
